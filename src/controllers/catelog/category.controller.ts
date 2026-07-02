import prisma from "../../config/prisma";
import type { RequestHandler } from "express";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { CreateCategorySchema, CategoryIdSchema, CategoryQuerySchema, UpdateCategorySchema,CategoryParamSchema} from "../../schema/catelog/category.schema";

// ==================== Controller ====================
export default class CategoryController {
  static getOne: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const result = CategoryIdSchema.safeParse(req.params);
      if (!result.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid category ID", result.error.format())
        );
      }
      const { id } = result.data;

      const cat = await prisma.categories.findUnique({ where: { id } });
      if (!cat) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Category not found"));
      }
      if (cat.company_id !== req.user!.company_id) {
        return res.status(403).json(ResponseBuilder.error(ErrorCode.FORBIDDEN, "Access denied"));
      }

      return res.status(200).json(ResponseBuilder.success(cat, "Category retrieved successfully"));
    } catch (err: unknown) {
      console.error("Get Category Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve category"));
    }
  };

  static getMany: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const result = CategoryQuerySchema.safeParse(req.query);
      if (!result.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid query parameters", result.error.format())
        );
      }

      const { page, limit } = result.data;
      const companyId = req.user!.company_id;
      const skip = (page - 1) * limit;

      const categories = await prisma.categories.findMany({
        where: { company_id: companyId, deleted_at: null },
        take: limit + 1,
        skip,
        orderBy: { created_at: "desc" },
      });

      const hasNext = categories.length > limit;
      if (hasNext) categories.pop();

      return res.status(200).json(
        ResponseBuilder.success(
          {
            categories,
            pagination: { page, limit, has_next: hasNext },
          },
          "Categories retrieved successfully"
        )
      );
    } catch (err: unknown) {
      console.error("Get Many Categories Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve categories"));
    }
  };

  //getManyItems:
   static getManyItem: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
      try {
        const paramsResult = CategoryParamSchema.safeParse(req.params);
        const queryResult = CategoryQuerySchema.safeParse(req.query);
  
        if (!paramsResult.success || !queryResult.success) {
          return res.status(400).json(
            ResponseBuilder.error(
              ErrorCode.VALIDATION_ERROR,
              "Invalid parameters"
            )
          );
        }
  
        const { id } = paramsResult.data;
        const { page, limit } = queryResult.data;
        const companyId = req.user!.company_id;
        const skip = (page - 1) * limit;
  
        const category = await prisma.categories.findFirst({
          where: { id: id, deleted_at: null, company_id: companyId },
        });
  
        if (!category) {
          return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Category not found"));
        }
  
        const items = await prisma.items.findMany({
          where: { cat_id: id, deleted_at: null, company_id: companyId },
          include: {
            options: {
              where: { deleted_at: null },
              orderBy: { name: "asc" },
            },
          },
          orderBy: { created_at: "asc" },
          skip,
          take: limit + 1,
        });
  
        const hasNext = items.length > limit;
        if (hasNext) items.pop();
  
        return res.status(200).json(
          ResponseBuilder.success(
            { items, pagination: { page, limit, has_next: hasNext } },
            "Items retrieved successfully"
          )
        );
      } catch (err: unknown) {
        console.error("Get Many Items Error:", err);
        return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve items"));
      }
    };

  static createCategory: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const bodyResult = CreateCategorySchema.safeParse(req.body);
      if (!bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid request body")
        );
      }

      const { name, parent_id } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;
      let existing;
      if(parent_id){
         existing = await prisma.categories.findFirst({
                where: { parent_id, company_id: companyId, name, deleted_at: null },
            });

      }else{
          existing = await prisma.categories.findFirst({
                where: { company_id: companyId, name, deleted_at: null },
            });

      }
     
      if (existing) {
        return res.status(409).json(ResponseBuilder.error(ErrorCode.CONFLICT, "Category already exists"));
      }

      if (parent_id) {
        const item = await prisma.items.findFirst({ where: { cat_id: parent_id } });
        if (item) {
          return res.status(409).json(
            ResponseBuilder.error(ErrorCode.CONFLICT, "Cannot create subcategory under a category that already contains items.")
          );
        }
      }

      const category = await prisma.categories.create({
        data: {
          name,
          parent_id: parent_id || null,
          company_id: companyId,
          created_by: userId,
          updated_by: userId,
        },
      });

      return res.status(201).json(ResponseBuilder.success(category, "Category created successfully"));
    } catch (err: unknown) {
      const prismaErr = err as any;
      if (prismaErr?.code === "P2002") {
        return res.status(409).json(ResponseBuilder.error(ErrorCode.CONFLICT, "Category already exists"));
      }
      console.error("Create Category Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to create category"));
    }
  };

  static updateCategory: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = CategoryIdSchema.safeParse(req.params);
      const bodyResult = UpdateCategorySchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid input"
          )
        );
      }

      const { id } = paramsResult.data;
      const { name } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const cat = await prisma.categories.findUnique({ where: { id } });
      if (!cat) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Category not found"));
      }

      // Fixed: Was incorrectly checking user_id instead of company_id
      if (cat.company_id !== companyId) {
        return res.status(403).json(ResponseBuilder.error(ErrorCode.FORBIDDEN, "Access denied"));
      }

      const category = await prisma.categories.update({
        where: { id },
        data: { name, updated_by: userId, updated_at: new Date() },
      });

      return res.status(200).json(ResponseBuilder.success(category, "Category updated successfully"));
    } catch (err: unknown) {
      console.error("Update Category Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to update category"));
    }
  };

  static deleteCategory: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const result = CategoryIdSchema.safeParse(req.params);
      if (!result.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid category ID", result.error.format())
        );
      }

      const { id } = result.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const cat = await prisma.categories.findUnique({ where: { id } });
      if (!cat) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Category not found"));
      }

      if (cat.company_id !== companyId) {
        return res.status(403).json(ResponseBuilder.error(ErrorCode.FORBIDDEN, "Access denied"));
      }

      await prisma.categories.update({
        where: { id },
        data: { deleted_at: new Date(), updated_by: userId },
      });

      return res.status(200).json(ResponseBuilder.success(null, "Category deleted successfully"));
    } catch (err: unknown) {
      console.error("Delete Category Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to delete category"));
    }
  };
}


// export default class CategoryController {
//   static async getOne(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const cat = await prisma.categories.findUnique({
//         where: { id },
//       });

//       if (!cat) {
//         return res.status(404).json({
//           success:false,
//           message: "Content not found" });
//       } 

//       if (cat.company_id !== req.user.company_id) {
//         return res.status(403).json({ 
//           success:false,
//           message: "Access denial" });
//       }

//       return res.json({
//         success: true,
//        data: cat
//       });
//     } catch (err) {
//       return res.status(500).json({ 
//         success:false,
//         message: "Server error" });
//     }
//   }

//   static async getMany(req: any, res: any) {
//     try {
//       const limit = parseInt(req.query.limit) || 10;
//       const page = parseInt(req.query.page) || 1;
//       const skip = (page - 1) * limit;

//       const categories = await prisma.categories.findMany({
//         where: {
//           company_id: req.user.company_id,
//           deleted_at: null,
//         },
//         take: limit + 1,
//         skip,
//         orderBy: {
//           created_at: "desc",
//         },
//       });

//       const has_next = categories.length > limit;

//       if (has_next) {
//         categories.pop();
//       }

//       return res.json({
//         success:true,
//         data: categories,
//         pagination: {
//           limit,
//           page,
//           has_next,
//         },
//       });
//     } catch (err) {
//       return res.status(500).json({
//         success:false,
//         message: "Server error" });
//     }
//   }

//   static async createCategory(req: any, res: any) {
//     try {
//       const { name, parent_id } = req.body;

//       const existing = await prisma.categories.findFirst({
//         where: {
//           parent_id,
//           company_id: req.user.user_id,
//           name,
//           deleted_at: null,
//         },
//       });

//       if (existing) {
//         return res.status(409).json({
//           success:false,
//           message: "Category already exists",
//         });
//       }
//         // just to make sure: that have homogenous in nature:
//       if (parent_id) {
//         const item = await prisma.items.findFirst({
//           where: {
//             cat_id: parent_id,
//           },
//         });

//         if (item) {
//           return res.status(409).json({
//             success:false,
//             message:
//               "Cannot create subcategory under a category that already contains items.",
//           });
//         }
//       }

//       const category = await prisma.categories.create({
//         data: {
//           name,
//           parent_id: parent_id || null,
//           company_id: req.user.company_id,
//           created_by: req.user.user_id,
//           updated_by: req.user.user_id,
//         },
//       });

//       return res.status(201).json({
//         success:true,
//         data: category
//       });
//     } catch (err: any) {
//       if (err.code === "P2002") {
//         return res.status(409).json({
//           message: "Category already exists",
//         });
//       }

//       return res.status(500).json({
//         success:false,
//         message: "Server error" });
//     }
//   }

//   static async updateCategory(req: any, res: any) {
//     try {
//       const { id } = req.params;
//       const { name } = req.body;

//       const cat = await prisma.categories.findUnique({
//         where: { id },
//       });

//       if (!cat) {
//         return res.status(404).json({ 
//           success:false,
//           message: "category not found" });
//       }

//       if (cat.company_id !== req.user.user_id) {
//         return res.status(403).json({
//           success:false,
//           message: "Access denial" });
//       }

//       const category = await prisma.categories.update({
//         where: { id },
//         data: {
//           name,
//           updated_by: req.user.user_id,
//           updated_at: new Date(),
//         },
//       });

//       return res.json(category);
//     } catch (err) {
//       return res.status(500).json({ 
//         success:false,
//         message: "Internal Server error" });
//     }
//   }

//   static async deleteCategory(req: any, res: any) {
//     try {
//       const { id } = req.params;

//       const cat = await prisma.categories.findUnique({
//         where: { id },
//       });

//       if (!cat) {
//         return res.status(404).json({
//           success:false,
//           message: "category is not found" });
//       }

//       if (cat.company_id !== req.user.company_id) {
//         return res.status(403).json({
//           success:false,
//           message: "Access denial" });
//       }

//       await prisma.categories.update({
//         where: { id },
//         data: {
//           deleted_at: new Date(),
//           updated_by: req.user.user_id,
//         },
//       });

//       return res.status(200).json({
//         success:true,
//         message: "Category deleted",
//       });
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({
//         success:false,
//         message: "Server error" });
//     }
//   }
// }