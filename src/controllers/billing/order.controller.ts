import type { RequestHandler } from "express";
import prisma from "../../config/prisma";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { orderStatus } from "../../../prisma/generated/client";
import {
  OrderIdSchema,
  OrderStatusSchema,
  CreateOrderSchema,
  UpdateOrderSchema,
} from "../../schema/billing/order.schema";
import { success } from "zod";

export default class OrderController {
  static getOne: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OrderIdSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid order ID", paramsResult.error.format())
        );
      }

      const { id } = paramsResult.data;
      const companyId = req.user!.company_id;

      const order = await prisma.orders.findFirst({
        where: { id, company_id: companyId },
        include: {
          order_options: {
            include: {
              options: {
                include: { items: true },
              },
            },
          },
        },
      });

      if (!order) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Order not found"));
      }
   
      return res.status(200).json(ResponseBuilder.success({...order,order_number:order.order_number.toString()}, "Order retrieved successfully"));
    } catch (err: unknown) {
      console.error("Get Order Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve order"));
    }
  };

  static getMany: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const page = parseInt(req.query.page as string) || 1;
      const skip = (page - 1) * limit;
      const companyId = req.user!.company_id;

      const orders = await prisma.orders.findMany({
        where: { company_id: companyId },
        orderBy: { created_at: "desc" },
        skip,
        take: limit + 1,
      });

      const has_next = orders.length > limit;
      if (has_next) orders.pop();
    const safeOrders = orders.map((order) => ({
            ...order,
            order_number: order.order_number.toString(),
          }));
      return res.status(200).json(
        ResponseBuilder.success(
          {
            data: safeOrders,
            pagination: { page, limit, has_next },
          },
          "Orders retrieved successfully"
        )
      );
    } catch (err: unknown) {
      console.error("Get Many Orders Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve orders"));
    }
  };

  static create: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const bodyResult = CreateOrderSchema.safeParse(req.body);
      if (!bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid request body", bodyResult.error.format())
        );
      }

      const { order_name, payment_type, discount, cash_amount, items } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const order = await prisma.$transaction(async (tx) => {
        const createdOrder = await tx.orders.create({
          data: {
            order_name: order_name ?? null,
            payment_type,
            discount: discount ?? 0,
            cash_amount: cash_amount ?? 0,
            company_id: companyId,
            created_by: userId,
            status_changed_by: userId,
          },
        });

        const optionIds = items.map((i) => i.option_id);
        const unitIds = [...new Set(items.map((i) => i.sell_unit_id))];

        const options = await tx.options.findMany({
          where: { id: { in: optionIds }, deleted_at: null, items: { company_id: companyId } },
        });

        if (options.length !== new Set(optionIds).size) {
          return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "One or more options not found or unauthorized"));
        }

        const units = await tx.units.findMany({
          where: { id: { in: unitIds } },
        });

        if (units.length !== unitIds.length) {
             return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "One or more units not found"));
         
        }

        const optionMap = new Map(options.map((o) => [o.id, o]));
        const orderOptionsData = items.map((row) => {
          const option = optionMap.get(row.option_id)!;
          return {
            order_id: createdOrder.id,
            option_id: option.id,
            sell_unit_id: row.sell_unit_id,
            sell_quantity: row.sell_quantity,
            price_per_base_unit: option.price_per_base_unit,
            currency: option.currency,
            created_by: userId,
            updated_by: userId,
          };
        });

        await tx.orderOptions.createMany({ data: orderOptionsData });
        
        return {...createdOrder,order_number:createdOrder.order_number.toString()};
      });
    
      return res.status(201).json(ResponseBuilder.success(order, "Order created successfully"));
    } catch (err: any) {
      console.error("Create Order Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, err.message || "Failed to create order"));
    }
  };

  static update: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OrderIdSchema.safeParse(req.params);
      const bodyResult = UpdateOrderSchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid input data")
        );
      }

      const { id } = paramsResult.data;
      const { order_name, discount, cash_amount, items } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const existingOrder = await prisma.orders.findFirst({
        where: { id, company_id: companyId },
      });

      if (!existingOrder) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Order not found"));
      }

      if (existingOrder.status !== orderStatus.PENDING) {
        return res.status(409).json(ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Only pending orders can be updated"));
      }

      const updatedOrder = await prisma.$transaction(async (tx) => {
        // 1. Update basic fields if provided
        const updated = await tx.orders.update({
          where: { id },
          data: {
            ...(order_name !== undefined && { order_name }),
            ...(discount !== undefined && { discount }),
            ...(cash_amount !== undefined && { cash_amount }),
          },
        });

        // 2. If item options list is supplied, drop old options and bulk re-add
        if (items) {
          await tx.orderOptions.deleteMany({ where: { order_id: id } });

          const optionIds = items.map((i) => i.option_id);
          const unitIds = [...new Set(items.map((i) => i.sell_unit_id))];

          const options = await tx.options.findMany({
            where: { id: { in: optionIds }, deleted_at: null, items: { company_id: companyId } },
          });

          if (options.length !== new Set(optionIds).size) {
              return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "One or more options not found or unauthorized"));
      
          }

          const units = await tx.units.findMany({ where: { id: { in: unitIds } } });
          if (units.length !== unitIds.length) {
                return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "One or more units not found"));
   
          }

          const optionMap = new Map(options.map((o) => [o.id, o]));
          const orderOptionsData = items.map((row) => {
            const option = optionMap.get(row.option_id)!;
            return {
              order_id: id,
              option_id: option.id,
              sell_unit_id: row.sell_unit_id,
              sell_quantity: row.sell_quantity,
              price_per_base_unit: option.price_per_base_unit,
              currency: option.currency,
              created_by: userId,
              updated_by: userId,
            };
          });

          await tx.orderOptions.createMany({ data: orderOptionsData });
        }

        return {...updated,order_number:updated.order_number.toString()};
      });

      return res.status(200).json(ResponseBuilder.success(updatedOrder, "Order updated successfully"));
    } catch (err: any) {
      console.error("Update Order Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, err.message || "Failed to update order"));
    }
  };

  static changeStatus: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OrderIdSchema.safeParse(req.params);
      const bodyResult = OrderStatusSchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid data payloads"));
      }


      const { id } = paramsResult.data;
      const { status } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const order = await prisma.orders.findFirst({
        where: { id, company_id: companyId },
      });

      if (!order) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Order not found"));
      }

      if (order.status !== orderStatus.PENDING) {
        return res.status(409).json(ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Only pending orders can have their status changed"));
      }

      const updated = await prisma.orders.update({
        where: { id },
        data: {
          status,
          status_changed_at: new Date(),
          status_changed_by: userId,
        },
      });

      return res.status(200).json(ResponseBuilder.success({...updated,order_number:updated.order_number.toString()}, `Order status updated to ${status}`));
    } catch (err: unknown) {
      console.error("Status Change Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to change order status"));
    }
  };

  static delete: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OrderIdSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid order ID"));
      }

      const { id } = paramsResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const order = await prisma.orders.findFirst({
        where: { id, company_id: companyId },
      });

      if (!order) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Order not found"));
      }

      await prisma.orders.update({
        where: { id },
        data: {
          status: orderStatus.CANCELLED,
          status_changed_at: new Date(),
          status_changed_by: userId,
        },
      });

      return res.status(200).json(ResponseBuilder.success(null, "Order successfully cancelled"));
    } catch (err: unknown) {
      console.error("Cancel Order Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to cancel order"));
    }
  };
}




// import prisma from "../../config/prisma";
// import {
//   orderStatus,
//   paymentType,
// } from "../../../prisma/generated/client";
// import { currencyType } from "@prisma/client";



// export class OrderController {
//   /**
//    * GET /orders/:id
//    */
//   static async getOne(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const order = await prisma.orders.findFirst({
//         where: {
//           id,
//           company_id: req.user.company_id,
//         },

//         include: {
//           order_options: {
//             include: {
//               options: {
//                 include: {
//                   items: true,
//                 },
//               },
//             },
//           },
//         },
//       });

//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found",
//         });
//       }

//       return res.json(order);
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * GET /orders
//    */
//   static async getMany(req: any, res: any) {
//     try {
//       const limit = parseInt(req.query.limit) || 20;
//       const page = parseInt(req.query.page) || 1;

//       const skip = (page - 1) * limit;

//       const orders = await prisma.orders.findMany({
//         where: {
//           company_id: req.user.company_id,
//         },

//         orderBy: {
//           created_at: "desc",
//         },

//         skip,
//         take: limit + 1,
//       });

//       const has_next = orders.length > limit;

//       if (has_next) {
//         orders.pop();
//       }

//       return res.json({
//         data: orders,
//         pagination: {
//           page,
//           limit,
//           has_next,
//         },
//       });
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * POST /orders
//    */
//   static async create(req: any, res: any) {
//   try {
//     const {
//       order_name,
//       payment_type,
//       discount,
//       cash_amount,
//       items,
//     } = req.body;

//     if (!items || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({
//         message: "Order must contain at least one item",
//       });
//     }

//     const order = await prisma.$transaction(async (tx) => {
//   // Create order first
//   //TODO: add order no. while creating order.
//   const createdOrder = await tx.orders.create({
//     data: {
//       order_name: order_name ?? null,
//       payment_type,
//       discount: discount ?? 0,
//       cash_amount: cash_amount ?? 0,
//       company_id: req.user.company_id,
//       created_by: req.user.user_id,
//       status_changed_by: req.user.user_id,
//     },
//   });

//   const optionIds = items.map(
//     (i: any) => i.option_id
//   );

//   const unitIds = items.map(
//     (i: any) => i.sell_unit_id
//   );

//   // Fetch all options at once
//   const options = await tx.options.findMany({
//     where: {
//       id: {
//         in: optionIds,
//       },

//       deleted_at: null,

//       items: {
//         company_id: req.user.company_id,
//       },
//     },
//   });

//   if (options.length !== optionIds.length) {
//     throw new Error(
//       "One or more options not found"
//     );
//   }

//   // Fetch all units at once
//   const units = await tx.units.findMany({
//     where: {
//       id: {
//         in: unitIds,
//       },
//     },
//   });

//   if (units.length !== new Set(unitIds).size) {
//     throw new Error(
//       "One or more units not found"
//     );
//   }

//   const optionMap = new Map(
//     options.map((o) => [o.id, o])
//   );

//   const orderOptionsData = items.map(
//     (row: any) => {
//       const option = optionMap.get(
//         row.option_id
//       );

//       if (!option) {
//         throw new Error(
//           `Option not found: ${row.option_id}`
//         );
//       }

//       return {
//         order_id: createdOrder.id,
//         option_id: option.id,
//         sell_unit_id: row.sell_unit_id,
//         sell_quantity: row.sell_quantity,
//         price_per_base_unit: option.price_per_base_unit,
//         currency:option.currency,
//         created_by: req.user.user_id,
//         updated_by: req.user.user_id,
//       };
//     }
//   );

//   // Bulk insert
//   await tx.orderOptions.createMany({
//     data: orderOptionsData,
//   });

//   return createdOrder;
// });

//     return res.status(201).json({
//       message: "Order created successfully",
//       data: order,
//     });
//   } catch (err: any) {
//     console.error(err);

//     return res.status(500).json({
//       message: err.message || "Server error",
//     });
//   }
// }

//   /**
//    * PUT /orders/:id
//    */
//   // when we talk about updating we simply add or remove options to the order:only when orderStatus or paymentStatus is pending.
//   static async update(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const order = await prisma.orders.findFirst({
//         where: {
//           id,
//           company_id: req.user.company_id,
//         },
//       });

//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found",
//         });
//       }

//       if (
//         order.status !== orderStatus.PENDING
//       ) {
//         return res.status(409).json({
//           message:
//             "Only pending orders can be updated",
//         });
//       }

//       const updated =
//         await prisma.orders.update({
//           where: {
//             id,
//           },

//           data: {
//             order_name:
//               req.body.order_name,
//             discount:
//               req.body.discount,
//             cash_amount:
//               req.body.cash_amount,
//           },
//         });

//       return res.json(updated);
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * PATCH /orders/:id/status
//    */
//   // here is about either cancelling or successfull status: if success then simply change the payment status to received:
//   static async changeStatus(
//     req: any,
//     res: any
//   ) {
//     try {
//       const { id } = req.params;
//       const { status } = req.body;

//       const order = await prisma.orders.findFirst({
//         where: {
//           id,
//           company_id: req.user.company_id,
//         },
//       });

//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found",
//         });
//       }

     
//           if (
//         order.status !== orderStatus.PENDING
//       ) {
//         return res.status(409).json({
//           message:
//             "Only pending orders can be updated",
//         });
//       }

//       const updated =
//         await prisma.orders.update({
//           where: {
//             id,
//           },

//           data: {
//             status,
//             status_changed_at:
//               new Date(),
//             status_changed_by:
//               req.user.user_id,
//           },
//         });

//       return res.json(updated);
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * DELETE /orders/:id
//    * Soft delete via CANCELLED status
//    */
//   // as order are either a success or cancelled, company can't deletes order. 
  
//   static async delete(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const order = await prisma.orders.findFirst({
//         where: {
//           id,
//           company_id: req.user.company_id,
//         },
//       });

//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found",
//         });
//       }

//       await prisma.orders.update({
//         where: {
//           id,
//         },

//         data: {
//           status:
//             orderStatus.CANCELLED,
//           status_changed_at:
//             new Date(),
//           status_changed_by:
//             req.user.user_id,
//         },
//       });

//       return res.status(200).json({
//         message: "Order cancelled",
//       });
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }
// }