import prisma from "../../config/prisma";
import type { RequestHandler } from "express";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { validateRolePermissions, getRolePermissions } from "../../utils/permissions";
import { RoleParamSchema,RoleQuerySchema, CreateRoleBodySchema, UpdateRoleBodySchema } from "../../schema/company/companyRole.schema";


class CompanyRoleController {
  static getList: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const queryResult = RoleQuerySchema.safeParse(req.query);
      if (!queryResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid query parameters", queryResult.error.format())
        );
      }

      const { page, limit } = queryResult.data;
      const companyId = req.user!.company_id;
      const skip = (page - 1) * limit;

      const roles = await prisma.companyRole.findMany({
        where: { company_id: companyId, deleted_at: null },
        include: {
          role_permissions: { include: { permission: true } },
        },
        orderBy: { created_at: "desc" },
        skip,
        take: limit + 1,
      });

      const hasNextPage = roles.length > limit;
      if (hasNextPage) roles.pop();

      return res.status(200).json(
        ResponseBuilder.success(
          {
            roles,
            pagination: { page, limit, has_next: hasNextPage },
          },
          "Roles retrieved successfully"
        )
      );
    } catch (error: unknown) {
      console.error("Get List Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve roles")
      );
    }
  };

  static getOne: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = RoleParamSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid role ID", paramsResult.error.format())
        );
      }

      const { roleId } = paramsResult.data;
      const companyId = req.user!.company_id;

      const role = await prisma.companyRole.findFirst({
        where: { id: roleId, company_id: companyId, deleted_at: null },
        include: { role_permissions: { include: { permission: true } } },
      });

      if (!role) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Role not found")
        );
      }

      const allPermissions = await prisma.permission.findMany({ orderBy: { id: "asc" } });
      const assignedKeys = new Set(role.role_permissions.map((rp) => rp.permission.permission_key));

      const { adminPermissions, staffPermissions, ownerPermissions } = getRolePermissions(allPermissions);
      let allowedPermissions = allPermissions;

      switch (role.user_type) {
        case "ADMIN": allowedPermissions = adminPermissions; break;
        case "STAFF": allowedPermissions = staffPermissions; break;
        case "OWNER": allowedPermissions = ownerPermissions; break;
      }

      const permissions = allowedPermissions.map((p) => ({
        id: p.id,
        permission_key: p.permission_key,
        assigned: assignedKeys.has(p.permission_key),
      }));

      return res.status(200).json(
        ResponseBuilder.success(
          {
            id: role.id,
            name: role.name,
            user_type: role.user_type,
            active: role.active,
            is_system: role.is_system,
            permissions,
          },
          "Role retrieved successfully"
        )
      );
    } catch (error: unknown) {
      console.error("Get One Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve role")
      );
    }
  };

  static create: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const bodyResult = CreateRoleBodySchema.safeParse(req.body);
      if (!bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid request body")
        );
      }

      const { name, user_type, active, permissionIds } = bodyResult.data;
      const companyId = req.user!.company_id;
      const requesterType = req.user!.user_type;

      if (user_type === "OWNER") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Creating an owner role is not allowed")
        );
      }

      if (requesterType === "ADMIN" && user_type !== "STAFF") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Admin user can only create roles for staff")
        );
      }

      const existingRole = await prisma.companyRole.findFirst({
        where: { company_id: companyId, name, deleted_at: null },
      });

      if (existingRole) {
        return res.status(409).json(
          ResponseBuilder.error(ErrorCode.CONFLICT, "Role already exists")
        );
      }

      const permissions = await prisma.permission.findMany({
        where: { id: { in: permissionIds } },
      });

      if (permissions.length !== permissionIds.length) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "One or more permission IDs are invalid")
        );
      }

      const validation = validateRolePermissions(user_type, permissions);
      if (!validation.valid) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Some permissions are not allowed for this role type",
            { invalidPermissions: validation.invalidPermissions }
          )
        );
      }

      const role = await prisma.$transaction(async (tx) => {
        const createdRole = await tx.companyRole.create({
          data: { company_id: companyId, name, user_type, active },
        });

        if (permissionIds.length > 0) {
          await tx.rolePermission.createMany({
            data: permissionIds.map((permissionId) => ({ role_id: createdRole.id, permission_id: permissionId })),
          });
        }

        return createdRole;
      });

      return res.status(201).json(
        ResponseBuilder.success(role, "Role created successfully")
      );
    } catch (error: unknown) {
      console.error("Create Role Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to create role")
      );
    }
  };

  static update: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = RoleParamSchema.safeParse(req.params);
      const bodyResult = UpdateRoleBodySchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid input parameters"
          )
        );
      }

      const { roleId } = paramsResult.data;
      const { name, user_type, active, permissionIds } = bodyResult.data;
      const companyId = req.user!.company_id;
      const requesterType = req.user!.user_type;

      const role = await prisma.companyRole.findFirst({
        where: { id: roleId, company_id: companyId, deleted_at: null },
        include: { role_permissions: { include: { permission: true } } },
      });

      if (!role) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Role not found")
        );
      }

      if (role.is_system) {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "System role cannot be modified")
        );
      }

      if (user_type === "OWNER") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Cannot modify roles to owner")
        );
      }

      if (requesterType === "ADMIN" && user_type !== "STAFF") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Admin can only modify STAFF roles")
        );
      }

      const targetUserType = user_type ?? role.user_type;

      const updatedRole = await prisma.companyRole.update({
        where: { id: roleId },
        data: {
          ...(name !== undefined && { name }),
          ...(user_type !== undefined && { user_type }),
          ...(active !== undefined && { active }),
        },
      });

      if (Array.isArray(permissionIds)) {
        const permissions = await prisma.permission.findMany({
          where: { id: { in: permissionIds } },
        });

        if (permissions.length !== permissionIds.length) {
          return res.status(400).json(
            ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "One or more permission IDs are invalid")
          );
        }

        const validation = validateRolePermissions(targetUserType, permissions);
        if (!validation.valid) {
          return res.status(400).json(
            ResponseBuilder.error(
              ErrorCode.VALIDATION_ERROR,
              "Some permissions are not allowed for this role type",
              { invalidPermissions: validation.invalidPermissions }
            )
          );
        }

        await prisma.$transaction(async (tx) => {
          await tx.rolePermission.deleteMany({ where: { role_id: roleId } });
          
          if (permissionIds.length > 0) {
            await tx.rolePermission.createMany({
              data: permissionIds.map((permissionId) => ({ role_id: roleId, permission_id: permissionId })),
            });
          }
        });
      }

      return res.status(200).json(
        ResponseBuilder.success(updatedRole, "Role updated successfully")
      );
    } catch (error: unknown) {
      console.error("Update Role Error:", error);
      const prismaError = error as any;
      if (prismaError?.code === "P2002") {
        return res.status(409).json(
          ResponseBuilder.error(ErrorCode.CONFLICT, "Role name already exists")
        );
      }
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to update role")
      );
    }
  };

  static delete: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = RoleParamSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid role ID", paramsResult.error.format())
        );
      }

      const { roleId } = paramsResult.data;
      const companyId = req.user!.company_id;
      const requesterType = req.user!.user_type;

      const role = await prisma.companyRole.findFirst({
        where: { id: roleId, company_id: companyId, deleted_at: null },
      });

      if (!role) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Role not found")
        );
      }

      if (role.is_system) {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "System role cannot be deleted")
        );
      }

      if (role.user_type === "OWNER") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Owner role cannot be deleted")
        );
      }

      if (requesterType === "ADMIN" && role.user_type !== "STAFF") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Admin can only delete STAFF roles")
        );
      }

      const assignedUsers = await prisma.companyUser.count({
        where: { company_id: companyId, role_id: roleId, deleted_at: null },
      });

      if (assignedUsers > 0) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Role cannot be deleted because it is assigned to users")
        );
      }

      await prisma.$transaction(async (tx) => {
        await tx.companyRole.update({ where: { id: roleId }, data: { deleted_at: new Date() } });
      });

      return res.status(200).json(
        ResponseBuilder.success(null, "Role deleted successfully")
      );
    } catch (error: unknown) {
      console.error("Delete Role Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to delete role")
      );
    }
  };
}

export default CompanyRoleController;


// class CompanyRoleController {
//   // Get all roles
//   static async getList(req: any, res: any) {
//     try {
//       const page = Number(req.query.page) || 1;
//       const limit = Number(req.query.limit) || 20;

//       const skip = (page - 1) * limit;

//       const roles = await prisma.companyRole.findMany({
//         where: {
//           company_id: req.user.company_id,
//           deleted_at: null,
//         },
//         include: {
//           role_permissions: {
//             include: {
//               permission: true,
//             },
//           },
//         },
//         orderBy: {
//           created_at: "desc",
//         },
//         skip,
//         take: limit + 1,
//       });

//       const hasNextPage = roles.length > limit;

//       if (hasNextPage) {
//         roles.pop();
//       }

//       return res.json({
//         data: roles,
//         pagination: {
//           page,
//           limit,
//           hasNextPage,
//         },
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: "Internal server error",
//       });
//     }
//   }

//   // Get single role
 

//     static async getOne(req: any, res: any) {
//     try {
//         const { roleId } = req.params;

//         // -----------------------------
//         // 1. Get role + assigned permissions
//         // -----------------------------
//         const role = await prisma.companyRole.findFirst({
//         where: {
//             id: roleId,
//             company_id: req.user.company_id,
//             deleted_at: null,
//         },
//         include: {
//             role_permissions: {
//             include: {
//                 permission: true,
//             },
//             },
//         },
//         });

//         if (!role) {
//         return res.status(404).json({
//             message: "Role not found",
//         });
//         }

       
//         const allPermissions = await prisma.permission.findMany({
//         orderBy: {
//             id: "asc",
//         },
//         });

//         // -----------------------------
//         // 3. Get assigned permission keys
//         // -----------------------------
//         const assignedKeys = new Set(
//         role.role_permissions.map(
//             (rp) => rp.permission.permission_key
//         )
//         );

//         // -----------------------------
//         // 4. Apply RBAC filtering using util
//         // -----------------------------
//         const {
//         adminPermissions,
//         staffPermissions,
//         ownerPermissions,
//         } = getRolePermissions(allPermissions);

//         let allowedPermissions = allPermissions;

//         switch (role.user_type) {
//         case "ADMIN":
//             allowedPermissions = adminPermissions;
//             break;

//         case "STAFF":
//             allowedPermissions = staffPermissions;
//             break;

//         case "OWNER":
//             allowedPermissions = ownerPermissions;
//             break;
//         }

//         // -----------------------------
//         // 5. Build final response
//         // -----------------------------
//         const permissions = allowedPermissions.map((p) => ({
//         id: p.id,
//         permission_key: p.permission_key,
//         assigned: assignedKeys.has(p.permission_key),
//         }));

//         return res.json({
//         data: {
//             id: role.id,
//             name: role.name,
//             user_type: role.user_type,
//             active: role.active,
//             is_system: role.is_system,
//             permissions,
//         },
//         });
//     } catch (error) {
//         console.error(error);

//         return res.status(500).json({
//         message: "Internal server error",
//         });
//     }
//     }

//   // Create role
 
//     static async create(req: any, res: any) {
//     try {
//         const {
//         name,
//         user_type,
//         active = true,
//         permissionIds = [],
//         } = req.body;

//         if (!name) {
//         return res.status(400).json({
//             message: "Role name is required",
//         });
//         }

//         if (user_type === "OWNER") {
//         return res.status(400).json({
//             message: "Creating an owner role is not allowed",
//         });
//         }

//         if (
//         req.user.user_type === "ADMIN" &&
//         user_type !== "STAFF"
//         ) {
//         return res.status(400).json({
//             message: "Admin user can only create roles for staff",
//         });
//         }

//         const existingRole = await prisma.companyRole.findFirst({
//         where: {
//             company_id: req.user.company_id,
//             name,
//             deleted_at: null,
//         },
//         });

//         if (existingRole) {
//         return res.status(400).json({
//             message: "Role already exists",
//         });
//         }

//         // 1. Fetch permissions from DB
//         const permissions = await prisma.permission.findMany({
//         where: {
//             id: {
//             in: permissionIds,
//             },
//         },
//         });

//         // 2. Validate invalid IDs (missing permissions in DB)
//         if (permissions.length !== permissionIds.length) {
//         return res.status(400).json({
//             message: "Oops one or more ids are wrong",
//         });
//         }

//         // 3. Validate against allowed permissions (IMPORTANT PART)
//         const validation = validateRolePermissions(
//         user_type,
//         permissions
//         );

//         if (!validation.valid) {
//         return res.status(400).json({
//             message: "Some permissions are not allowed for this role type",
//             invalidPermissions: validation.invalidPermissions,
//         });
//         }

//         // 4. Create role + mapping
//         const role = await prisma.$transaction(async (tx) => {
//         const createdRole = await tx.companyRole.create({
//             data: {
//             company_id: req.user.company_id,
//             name,
//             user_type,
//             active,
//             },
//         });

//         if (permissionIds.length > 0) {
//             await tx.rolePermission.createMany({
//             data: permissionIds.map((permissionId: number) => ({
//                 role_id: createdRole.id,
//                 permission_id: permissionId,
//             })),
//             });
//         }

//         return createdRole;
//         });

//         return res.status(201).json({
//         message: "Role created successfully",
//         data: role,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//         message: "Internal server error",
//         });
//     }
//     }

//   // Update role
//     // we can use this to update the active or not active state: 
//     static async update(req: any, res: any) {
//     try {
//         const { roleId } = req.params;
//         const {
//         name,
//         user_type,
//         active,
//         permissionIds,
//         } = req.body;

//         const role = await prisma.companyRole.findFirst({
//         where: {
//             id: roleId,
//             company_id: req.user.company_id,
//             deleted_at: null,
//         },
//         include: {
//             role_permissions: {
//             include: {
//                 permission: true,
//             },
//             },
//         },
//         });

//         if (!role) {
//         return res.status(404).json({
//             message: "Role not found",
//         });
//         }


//         if (role.is_system) {
//         return res.status(400).json({
//             message: "System role cannot be modified",
//         });
//         }

//     // ROLE MODIFICATION: This route is protect only for the OWNER and ADMIN:
//         if (user_type === "OWNER") {
//         return res.status(403).json({
//             message: " cannot modify roles to owner",
//         });
//         }

       
//         if (req.user.user_type === "ADMIN" && user_type !== "STAFF") {
//           return res.status(403).json({
//             message: "Admin can only modify STAFF roles",
//             });

//         }



      
//         const targetUserType = user_type ?? role.user_type;

      
//         const updatedRole = await prisma.companyRole.update({
//         where: {
//             id: roleId,
//         },
//         data: {
//             ...(name !== undefined && { name }),
//             ...(user_type !== undefined && { user_type }),
//             ...(active !== undefined && { active }),
//         },
//         });

     
//         if (Array.isArray(permissionIds)) {
        
//         const permissions = await prisma.permission.findMany({
//             where: {
//             id: {
//                 in: permissionIds,
//             },
//             },
//         });

      
//         if (permissions.length !== permissionIds.length) {
//             return res.status(400).json({
//             message: "One or more permission ids are invalid",
//             });
//         }

        
//         const validation = validateRolePermissions(
//             targetUserType,
//             permissions
//         );

//         if (!validation.valid) {
//             return res.status(400).json({
//             message:
//                 "Some permissions are not allowed for this role type",
//             invalidPermissions: validation.invalidPermissions,
//             });
//         }

//         // replace permissions (transaction safe)
//         await prisma.$transaction(async (tx) => {
//             await tx.rolePermission.deleteMany({
//             where: {
//                 role_id: roleId,
//             },
//             });

//             if (permissionIds.length > 0) {
//             await tx.rolePermission.createMany({
//                 data: permissionIds.map((permissionId: number) => ({
//                 role_id: roleId,
//                 permission_id: permissionId,
//                 })),
//             });
//             }
//         });
//         }

      
//         return res.json({
//         message: "Role updated successfully",
//         data: updatedRole,
//         });
//     } catch (error: any) {
//         console.error(error);

//         if (error.code === "P2002") {
//         return res.status(400).json({
//             message: "Role name already exists",
//         });
//         }

//         return res.status(500).json({
//         message: "Internal server error",
//         });
//     }
//     }
//   // Soft delete role
//   static async delete(req: any, res: any) {
//   try {
//     const { roleId } = req.params;

//     const role = await prisma.companyRole.findFirst({
//       where: {
//         id: roleId,
//         company_id: req.user.company_id,
//         deleted_at: null,
//       },
//     });

//     if (!role) {
//       return res.status(404).json({
//         message: "Role not found",
//       });
//     }

//     if (role.is_system) {
//       return res.status(400).json({
//         message: "System role cannot be deleted",
//       });
//     }

//     if (role.user_type === "OWNER") {
//       return res.status(403).json({
//         message: "Role owner cannot be deleted",
//       });
//     }

//     if (req.user.user_type === "ADMIN" && role.user_type !== "STAFF") {
//       return res.status(403).json({
//         message: "Admin can only delete STAFF roles",
//       });
//     }

//     const assignedUsers = await prisma.companyUser.count({
//       where: {
//         company_id:req.user.company_id,
//         role_id: roleId,
//         deleted_at: null,
//       },
//     });

//     if (assignedUsers > 0) {
//       return res.status(400).json({
//         message: "Role cannot be deleted because it is assigned to users",
//       });
//     }

//     await prisma.$transaction(async (tx) => {
//       // 1. Soft delete role
//       await tx.companyRole.update({
//         where: { id: roleId },
//         data: { deleted_at: new Date() },
//       });
//       // 
//     //   // 2. Soft delete role permissions (IMPORTANT CHANGE)
//     //   await tx.rolePermission.updateMany({
//     //     where: {
//     //       role_id: roleId,
         
//     //     },
//     //     data: {
//     //       deleted_at: new Date(),
//     //     },
//     //   });
//     });

//     return res.json({
//       message: "Role deleted successfully",
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// }
// }

// export default CompanyRoleController;