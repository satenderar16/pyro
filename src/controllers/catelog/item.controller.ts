import type { RequestHandler } from "express";
import prisma from "../../config/prisma";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { 
  ItemIdSchema, 
  ItemQuerySchema, 
  CreateItemSchema, 
  UpdateItemSchema 
} from "../../schema/catelog/item.schema";
import { optionType } from "../../../prisma/generated/client";

export default class ItemController {
  static getOne: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = ItemIdSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid item ID")
        );
      }

      const { id } = paramsResult.data;
      const companyId = req.user!.company_id;

      const item = await prisma.items.findFirst({
        where: { id, deleted_at: null, company_id: companyId },
        include: {
          options: {
            where: { deleted_at: null },
            orderBy: { name: "asc" },
          },
        },
      });

      if (!item) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Item not found"));
      }

      return res.status(200).json(ResponseBuilder.success(item, "Item retrieved successfully"));
    } catch (err: unknown) {
      console.error("Get Item Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve item"));
    }
  };

 
  static getMany: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const result = ItemQuerySchema.safeParse(req.query);
      if (!result.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid query parameters")
        );
      }

      const { page, limit } = result.data;
      const companyId = req.user!.company_id;
      const skip = (page - 1) * limit;

      const items = await prisma.items.findMany({
        where: { company_id: companyId, deleted_at: null },
        include: {
          options: {
            where: { deleted_at: null },
            orderBy: { name: "asc" },
          },
        },
        orderBy: { created_at: "desc" },
        skip,
        take: limit + 1,
      });

      const hasNext = items.length > limit;
      if (hasNext) items.pop();

      return res.status(200).json(
        ResponseBuilder.success(
          {
            items,
            pagination: { page, limit, has_next: hasNext },
          },
          "Items retrieved successfully"
        )
      );
    } catch (err: unknown) {
      console.error("Get Many Items Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve items"));
    }
  };
 
  //GET many Options
   static getManyOption: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = ItemIdSchema.safeParse(req.params);
      const queryResult = ItemQuerySchema.safeParse(req.query);

      if (!paramsResult.success || !queryResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid parameters"
          )
        );
      }

      const { id: itemId } = paramsResult.data;
      const { page, limit } = queryResult.data;
      const companyId = req.user!.company_id;
      const skip = (page - 1) * limit;

      // 1. Verify item exists & belongs to company
      const item = await prisma.items.findFirst({
        where: { id: itemId, deleted_at: null, company_id: companyId },
      });

      if (!item) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Item not found"));
      }

      // 2. Fetch paginated options
      const options = await prisma.options.findMany({
        where: { item_id: itemId, deleted_at: null },
        include: { units: true },
        orderBy: { created_at: "asc" },
        skip,
        take: limit + 1,
      });

      const hasNext = options.length > limit;
      if (hasNext) options.pop();

      return res.status(200).json(
        ResponseBuilder.success(
          { 
            options, 
            pagination: { page, limit, has_next: hasNext } 
          },
          "Options retrieved successfully"
        )
      );
    } catch (err: unknown) {
      console.error("Get Many Options Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve options"));
    }
  };



  static create: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const bodyResult = CreateItemSchema.safeParse(req.body);
      if (!bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid request body", bodyResult.error.format())
        );
      }

      const { name, cat_id,  price_per_base_unit, unit_id, image_url, currency } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const category = await prisma.categories.findFirst({
        where: { id: cat_id, deleted_at: null, company_id: companyId },
      });
      if (!category) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Category not found"));
      }

      const childCategory = await prisma.categories.findFirst({
        where: { parent_id: cat_id, deleted_at: null },
      });
      if (childCategory) {
        return res.status(409).json(
          ResponseBuilder.error(ErrorCode.CONFLICT, "Cannot create item inside category containing subcategories")
        );
      }

      const existingItem = await prisma.items.findFirst({
        where: { name, cat_id, deleted_at: null },
      });
      if (existingItem) {
        return res.status(409).json(ResponseBuilder.error(ErrorCode.CONFLICT, "Item already exists"));
      }

      const result = await prisma.$transaction(async (tx) => {
        const item = await tx.items.create({
          data: { name, cat_id, company_id: companyId,  created_by: userId, updated_by: userId },
        });

        const option = await tx.options.create({
          data: {
            name,
            item_id: item.id,
            unit_id,
            input_price: 40,
            input_value: 2,
            type: optionType.PACKAGE,
            price_per_base_unit,
            min_sell_quantity: 1,
            min_sell_unit_id: unit_id,
            currency: currency || "INR",
            created_by: userId,
            updated_by: userId,
          },
        });

        return { item, option };
      });

      return res.status(201).json(ResponseBuilder.success(result, "Item created with default option"));
    } catch (err: unknown) {
      const prismaErr = err as any;
      if (prismaErr?.code === "P2002") {
        return res.status(409).json(ResponseBuilder.error(ErrorCode.CONFLICT, "Item already exists"));
      }
      console.error("Create Item Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to create item"));
    }
  };

  static update: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = ItemIdSchema.safeParse(req.params);
      const bodyResult = UpdateItemSchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid input"
          )
        );
      }

      const { id } = paramsResult.data;
      const { name, image_url } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const item = await prisma.items.findFirst({
        where: { id, deleted_at: null, company_id: companyId },
      });
      if (!item) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Item not found"));
      }

      const updatedItem = await prisma.items.update({
        where: { id },
        data: {
          ...(name !== undefined && { name }),
          ...(image_url !== undefined && { image_url }),
          updated_by: userId,
          updated_at: new Date(),
        },
      });

      return res.status(200).json(ResponseBuilder.success(updatedItem, "Item updated successfully"));
    } catch (err: unknown) {
      console.error("Update Item Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to update item"));
    }
  };

  static delete: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = ItemIdSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid item ID", paramsResult.error.format())
        );
      }

      const { id } = paramsResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const item = await prisma.items.findFirst({
        where: { id, deleted_at: null, company_id: companyId },
      });
      if (!item) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Item not found"));
      }

      await prisma.items.update({
        where: { id },
        data: { deleted_at: new Date(), updated_by: userId },
      });

      return res.status(200).json(ResponseBuilder.success(null, "Item deleted successfully"));
    } catch (err: unknown) {
      console.error("Delete Item Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to delete item"));
    }
  };
}




// import prisma from "../../config/prisma";
// import { currencyType, optionType } from "../../../prisma/generated/client";

// type CreateItemDTO = {
//   name: string;
//   cat_id: string;
//   companyId: string;
//   type: optionType;
//   price_per_base_unit: number;
//   unit_id: string;
//   image_url?: string;
//   currency?: currencyType;
// };

// export default class ItemController {
//   /**
//    * GET /items/:id
//    */
//   static async getOne(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const item = await prisma.items.findFirst({
//         where: {
//           id,
//           deleted_at: null,
//           company_id: req.user.company_id,
//         },

//         include: {
//           options: {
//             where: {
//               deleted_at: null,
//             },
//             orderBy: {
//               name: "asc",
//             },
//           },
//         },
//       });

//       if (!item) {
//         return res.status(404).json({
//           message: "Item not found",
//         });
//       }

//       return res.json(item);
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * GET /categories/:cat_id/items
//    */
//   static async getMany(req: any, res: any) {
//     try {
//       const { cat_id } = req.params;

//       const limit = parseInt(req.query.limit) || 10;
//       const page = parseInt(req.query.page) || 1;

//       const skip = (page - 1) * limit;

//       const category = await prisma.categories.findFirst({
//         where: {
//           id: cat_id,
//           deleted_at: null,
//           company_id: req.user.company_id,
//         },
//       });

//       if (!category) {
//         return res.status(404).json({
//           message: "Category not found",
//         });
//       }

//       const items = await prisma.items.findMany({
//         where: {
//           cat_id,
//           deleted_at: null,
//           company_id: req.user.company_id,
//         },

//         include: {
//           options: {
//             where: {
//               deleted_at: null,
//             },
//             orderBy: {
//               name: "asc",
//             },
//           },
//         },

//         orderBy: {
//           created_at: "asc",
//         },

//         skip,
//         take: limit + 1,
//       });

//       const has_next = items.length > limit;

//       if (has_next) {
//         items.pop();
//       }

//       return res.json({
//         data: items,
//         pagination: {
//           limit,
//           page,
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
//    * POST /items
//    */
//   static async create(req: any, res: any) {
//     try {
//       const {
//         name,
//         cat_id,
//         type,
//         price_per_base_unit,
//         unit_id,
//         currency,
//       }: CreateItemDTO = req.body;

//       const companyId = req.user.company_id;

//       const category = await prisma.categories.findFirst({
//         where: {
//           id: cat_id,
//           deleted_at: null,
//           company_id: companyId,
//         },
//       });

//       if (!category) {
//         return res.status(404).json({
//           message: "Category not found",
//         });
//       }

//       const childCategory = await prisma.categories.findFirst({
//         where: {
//           parent_id: cat_id,
//           deleted_at: null,
//         },
//       });

//       if (childCategory) {
//         return res.status(409).json({
//           message:
//             "Cannot create item inside category containing subcategories",
//         });
//       }

//       const existingItem = await prisma.items.findFirst({
//         where: {
//           name,
//           cat_id,
//           deleted_at: null,
//         },
//       });

//       if (existingItem) {
//         return res.status(409).json({
//           message: "Item already exists",
//         });
//       }

//       const result = await prisma.$transaction(async (tx) => {
//         const item = await tx.items.create({
//           data: {
//             name,
//             cat_id,
//             company_id: companyId,
//             type,
//             created_by: req.user.user_id,
//             updated_by: req.user.user_id,
//           },
//         });

//         const option = await tx.options.create({
//           data: {
//             name,
//             item_id: item.id,
//             unit_id,
//             input_price: 40,
//             input_value: 2,
//             type:optionType.PACKAGE,
//             price_per_base_unit,
//             min_sell_quantity:1,
//             min_sell_unit_id:unit_id,
//             currency: currency || "INR",
//             created_by: req.user.user_id,
//             updated_by: req.user.user_id,
//           },
//         });

//         return { item, option };
//       });

//       return res.status(201).json({
//         message: "Item created with default option",
//         data: result,
//       });
//     } catch (err: any) {
//       if (err.code === "P2002") {
//         return res.status(409).json({
//           message: "Item already exists",
//         });
//       }

//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * PUT /items/:id
//    */
//   static async update(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const { name, image_url, type } = req.body;

//       const item = await prisma.items.findFirst({
//         where: {
//           id,
//           deleted_at: null,
//           company_id: req.user.company_id,
//         },
//       });

//       if (!item) {
//         return res.status(404).json({
//           message: "Item not found",
//         });
//       }

//       const updatedItem = await prisma.items.update({
//         where: { id },

//         data: {
//           name,
//           image_url,
//           type,
//           updated_by: req.user.user_id,
//           updated_at: new Date(),
//         },
//       });

//       return res.json(updatedItem);
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }

//   /**
//    * DELETE /items/:id
//    */
//   static async delete(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const item = await prisma.items.findFirst({
//         where: {
//           id,
//           deleted_at: null,
//           company_id: req.user.company_id,
//         },
//       });

//       if (!item) {
//         return res.status(404).json({
//           message: "Item not found",
//         });
//       }

//       await prisma.items.update({
//         where: { id },

//         data: {
//           deleted_at: new Date(),
//           updated_by: req.user.user_id,
//         },
//       });

//       return res.status(200).json({
//         message: "Item deleted",
//       });
//     } catch (err) {
//       return res.status(500).json({
//         message: "Server error",
//       });
//     }
//   }
// }