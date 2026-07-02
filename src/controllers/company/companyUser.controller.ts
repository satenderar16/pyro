import prisma from "../../config/prisma";
import type { RequestHandler } from "express";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { CompanyUserQuerySchema, UserIdParamsSchema, VerifyMemberBodySchema, UpdateMemberBodySchema} from "../../schema/company/companyUser.schema";



// ==================== Controller ====================
class CompanyUserController {
  static getList: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const queryResult = CompanyUserQuerySchema.safeParse(req.query);

      if (!queryResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid query parameters")
        );
      }

      const { page, limit, verified } = queryResult.data;
      const companyId = req.user!.company_id;
      const skip = (page - 1) * limit;

      const where: any = {
        company_id: companyId,
        deleted_at: null,
      };

      if (verified !== undefined) {
        where.verified_user = verified;
      }

      const members = await prisma.companyUser.findMany({
        where,
        include: {
          user: { select: { id: true, name: true, username: true, email: true } },
          role: true,
          verifier: { select: { id: true, name: true } },
        },
        orderBy: { created_at: "desc" },
        skip,
        take: limit + 1,
      });

      const hasNextPage = members.length > limit;
      if (hasNextPage) members.pop();

      return res.status(200).json(
        ResponseBuilder.success(
          {
            members,
            pagination: { page, limit, has_next: hasNextPage },
          },
          "Members retrieved successfully"
        )
      );
    } catch (error: unknown) {
      console.error("Get List Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve members")
      );
    }
  };

  static getOne: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = UserIdParamsSchema.safeParse(req.params);

      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid user ID", paramsResult.error.format())
        );
      }

      const { userId } = paramsResult.data;
      const companyId = req.user!.company_id;

      const member = await prisma.companyUser.findFirst({
        where: {
          company_id: companyId,
          user_id: userId,
          deleted_at: null,
        },
        include: {
          user: true,
          role: true,
          verifier: true,
        },
      });

      if (!member) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Member not found")
        );
      }

      return res.status(200).json(
        ResponseBuilder.success(member, "Member retrieved successfully")
      );
    } catch (error: unknown) {
      console.error("Get One Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve member")
      );
    }
  };

  static verifyUser: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = UserIdParamsSchema.safeParse(req.params);
      const bodyResult = VerifyMemberBodySchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid input parameters"
          )
        );
      }

      const { userId } = paramsResult.data;
      const { role_id, user_type } = bodyResult.data;
      const companyId = req.user!.company_id;
      const authUserId = req.user!.user_id;
      const requesterType = req.user!.user_type;

      // Check if already a member
      const existingMember = await prisma.companyUser.findFirst({
        where: {
          company_id: companyId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (existingMember) {
        return res.status(409).json(
          ResponseBuilder.error(ErrorCode.CONFLICT, "User is already a company member")
        );
      }

      // Check for active invite
      const invite = await prisma.companyInvite.findFirst({
        where: {
          company_id: companyId,
          invited_user_id: userId,
          deleted_at: null,
        },
        orderBy: { created_at: "desc" },
      });

      if (!invite) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "User hasn't been invited")
        );
      }

      if (!invite.is_redeemed) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "User hasn't accepted the invite yet")
        );
      }

      // Validate role
      const role = await prisma.companyRole.findFirst({
        where: {
          id: role_id,
          company_id: companyId,
        },
      });

      if (!role) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Invalid role")
        );
      }

      // Permission rules
      if (requesterType === "OWNER" && role.user_type === "OWNER") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Owner cannot create another owner")
        );
      }

      if (requesterType === "ADMIN" && role.user_type !== "STAFF") {
        return res.status(403).json(
          ResponseBuilder.error(ErrorCode.FORBIDDEN, "Admins can only create staff members")
        );
      }

      const member = await prisma.companyUser.create({
        data: {
          company_id: companyId,
          user_id: userId,
          role_id,
          user_type,
          verified_user: true,
          verified_by: authUserId,
          verified_at: new Date(),
          created_by: authUserId,
          updated_by: authUserId,
        },
        include: {
          user: true,
          role: true,
          verifier: { select: { id: true, name: true } },
        },
      });

      return res.status(201).json(
        ResponseBuilder.success(member, "User verified and added to company successfully")
      );
    } catch (error: unknown) {
      console.error("Verify User Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to verify user")
      );
    }
  };

  static updateMember: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = UserIdParamsSchema.safeParse(req.params);
      const bodyResult = UpdateMemberBodySchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid input parameters"
          )
        );
      }

      const { userId } = paramsResult.data;
      const targetCompanyId = req.user!.company_id;
      const authUserId = req.user!.user_id;
      const requesterType = req.user!.user_type;

      const member = await prisma.companyUser.findFirst({
        where: {
          company_id: targetCompanyId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!member) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Member not found")
        );
      }

      const updateData: any = {};

      if (bodyResult.data.role_id !== undefined) {
        updateData.role_id = bodyResult.data.role_id;
      }

      if (bodyResult.data.user_type !== undefined) {
        const newType = bodyResult.data.user_type;

        if (authUserId === userId && (requesterType === "OWNER" || requesterType === "ADMIN")) {
          return res.status(400).json(
            ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "User cannot update their own data")
          );
        }

        if (requesterType === "ADMIN" && newType !== "STAFF") {
          return res.status(403).json(
            ResponseBuilder.error(ErrorCode.FORBIDDEN, "Admins are only permitted to assign the 'STAFF' user type")
          );
        }

        updateData.user_type = newType;
      }

      updateData.updated_at = new Date();
      updateData.updated_by = authUserId;

      const result = await prisma.companyUser.update({
        where: {
          company_id_user_id: {
            company_id: targetCompanyId,
            user_id: userId,
          },
        },
        data: updateData,
        include: {
          user: true,
          role: true,
        },
      });

      return res.status(200).json(
        ResponseBuilder.success(result, "Member updated successfully")
      );
    } catch (error: unknown) {
      console.error("Update Member Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to update member")
      );
    }
  };

  static deleteUser: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = UserIdParamsSchema.safeParse(req.params);

      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid user ID", paramsResult.error.format())
        );
      }

      const { userId } = paramsResult.data;
      const companyId = req.user!.company_id;

      const member = await prisma.companyUser.findFirst({
        where: {
          company_id: companyId,
          user_id: userId,
          deleted_at: null,
        },
      });

      if (!member) {
        return res.status(404).json(
          ResponseBuilder.error(ErrorCode.NOT_FOUND, "Member not found")
        );
      }

      await prisma.companyUser.update({
        where: {
          company_id_user_id: {
            company_id: companyId,
            user_id: userId,
          },
        },
        data: {
          deleted_at: new Date(),
        },
      });

      return res.status(200).json(
        ResponseBuilder.success(null, "Member removed successfully")
      );
    } catch (error: unknown) {
      console.error("Delete User Error:", error);
      return res.status(500).json(
        ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to remove member")
      );
    }
  };
}

export default CompanyUserController;





// class CompanyUserController {

//     //Read multiples:
//         static async getList(req: any, res: any) {
//             try {
//                 const page = Number(req.query.page) || 1;
//                 const limit = Number(req.query.limit) || 20;

//                 const verified =
//                 req.query.verified !== undefined
//                     ? req.query.verified === "true"
//                     : undefined;

//                 const skip = (page - 1) * limit;

//                 const where: any = {
//                 company_id: req.user.company_id,
//                 deleted_at: null,
//                 };

//                 if (verified !== undefined) {
//                 where.verified_user = verified;
//                 }

//                 const members = await prisma.companyUser.findMany({
//                 where,
//                 include: {
//                     user: {
//                     select: {
//                         id: true,
//                         name: true,
//                         username: true,
//                         email: true,
//                     },
//                     },
//                     role: true,
//                     verifier: {
//                     select: {
//                         id: true,
//                         name: true,
//                     },
//                     },
//                 },
//                 orderBy: {
//                     created_at: "desc",
//                 },
//                 skip,
//                 take: limit + 1,
//                 });

//                 const hasNextPage = members.length > limit;

//                 if (hasNextPage) {
//                     members.pop();
//                 }

//                 return res.json({
//                 data: members,
//                 pagination: {
//                     page,
//                     limit,
//                     hasNextPage,
//                 },
//                 });
//             } catch (error) {
//                 return res.status(500).json({
//                 message: "Internal server error",
//                 });
//             }
//         }


//         //read single
//         static async getOne(req: any, res: any) {
//         try {
//             const { userId } = req.params;

//             const member = await prisma.companyUser.findFirst({
//             where: {
//                 company_id: req.user.company_id,
//                 user_id: userId,
//                 deleted_at: null,
//             },
//             include: {
//                 user: true,
//                 role: true,
//                 verifier: true,
//             },
//             });

//             if (!member) {
//             return res.status(404).json({
//                 message: "Member not found",
//             });
//             }

//             return res.json({
//             data: member,
//             });
//         } catch (error) {
//             return res.status(500).json({
//             message: "Internal server error",
//             });
//         }
//         }


//         static async verifyUser(req: any, res: any) {
//             try {
//                 const { userId } = req.params;

//                 // more data to edit can be added:
//                 const { role_id, user_type } = req.body;

//                 const companyId = req.user.company_id;

//                 if (!role_id) {
//                 return res.status(400).json({
//                     message: "role_id is required",
//                 });
//                 }

//                 if (!user_type) {
//                 return res.status(400).json({
//                     message: "user_type is required",
//                 });
//                 }

//                 const existingMember = await prisma.companyUser.findFirst({
//                 where: {
//                     company_id: companyId,
//                     user_id: userId,
//                     deleted_at: null,
//                 },
//                 });

//                 if (existingMember) {
//                 return res.status(400).json({
//                     message: "User is already a company member",
//                 });
//                 }

//                 const invite = await prisma.companyInvite.findFirst({
//                 where: {
//                     company_id: companyId,
//                     invited_user_id: userId,
//                     deleted_at: null,
//                 },
//                 orderBy: {
//                     created_at: "desc",
//                 },
//                 });

//                 if (!invite) {
//                 return res.status(400).json({
//                     message: "User hasn't been invited",
//                 });
//                 }
                

//                 if (!invite.is_redeemed) {
//                 return res.status(400).json({
//                     message: "Oops, user hasn't accepted the invite yet",
//                 });
//                 }
//                 // check if the invite is not expired before redeemtion 
//                 const role = await prisma.companyRole.findFirst({
//                 where: {
//                     id: role_id,
//                     company_id: companyId,
//                 },
//                 });

//                 if (!role) {
//                 return res.status(400).json({
//                     message: "Invalid role",
//                 });
//                 }

//                 // check if owner verify role.user_type cannot be ownner
//                 if(req.user.user_type ==="OWNER" && role.user_type === "OWNER"){
//                     return res.status(400).json({message:"Owner cannot create owner"});
//                 }
//                 if(req.user.user_type === 'ADMIN' && role.user_type !== 'STAFF'){
//                     return res.status(400).json({message:"Admin can only create staff members"});
//                 }

//                 const member = await prisma.companyUser.create({
//                 data: {
//                     company_id: companyId,
//                     user_id: userId,
//                     role_id,
//                     user_type,
//                     verified_user: true,
//                     verified_by: req.user.user_id,
//                     verified_at: new Date(),
//                     created_by:req.user.user_id,
//                     updated_by:req.user.user_id
//                 },
//                 include: {
//                     user: true,
//                     role: true,
//                     verifier: {
//                     select: {
//                         id: true,
//                         name: true,
//                     },
//                     },
//                 },
//                 });

//                 return res.json({
//                 message: "User verified and added to company successfully",
//                 data: member,
//                 });
//             } catch (error) {
//                 return res.status(500).json({
//                 message: "Internal server error",
//                 });
//             }
//         }


//       static async updateMember(req: any, res: any) {
//             try {
//                 const { userId } = req.params;
//                 const targetCompanyId = req.user.company_id;
                
                
//                 const authUserId = req.user.user_id; 
//                 const requesterType = req.user.user_type; 

//                 // 1. Fetch only the target member to be updated
//                 const member = await prisma.companyUser.findFirst({
//                     where: {
//                         company_id: targetCompanyId,
//                         user_id: userId,
//                         deleted_at: null,
//                     },
//                 });

//                 if (!member) {
//                     return res.status(404).json({ message: "Member not found" });
//                 }

//                 const updateData: any = {};

//                 // Handle role_id update
//                 if (req.body.role_id !== undefined) {
//                     updateData.role_id = req.body.role_id;
//                 }

//                 // 2. Apply business rules for user_type updates
//                 if (req.body.user_type !== undefined) {
//                     const newType = req.body.user_type;

//                     // Rule 1: An OWNER cannot demote or change their own user_type
//                     if (authUserId === userId && (requesterType === 'OWNER' || requesterType === "ADMIN")) {
//                         return res.status(400).json({ 
//                             message: "User cannot update their own data." 
//                         });
//                     }

//                     // Rule 2: If the requester is an ADMIN, they can ONLY set/change a user type to STAFF
//                     if (requesterType === 'ADMIN') {
//                         if (newType !== 'STAFF') {
//                             return res.status(403).json({ 
//                                 message: "Admins are only permitted to assign the 'STAFF' user type." 
//                             });
//                         }
//                     }
                    
//                     // stopped at middle where level: by simply checking the permissions:
//                     // if (requesterType === 'STAFF') {
//                     //     return res.status(403).json({ 
//                     //         message: "Staff members do not have permission to modify user types." 
//                     //     });
//                     // }

//                     updateData.user_type = newType;
//                 }
                
//                 updateData.updated_at = new Date();
//                 updateData.updated_by = req.user.user_id;
//                 // 3. Perform the update
//                 const result = await prisma.companyUser.update({
//                     where: {
//                         company_id_user_id: {
//                             company_id: targetCompanyId,
//                             user_id: userId,
//                         },
//                     },
//                     data: updateData,
//                     include: {
//                         user: true,
//                         role: true,
//                     },
//                 });

//                 return res.json({
//                     message: "Member updated successfully",
//                     data: result,
//                 });
//             } catch (error) {
//                 console.error(error);
//                 return res.status(500).json({
//                     message: "Internal server error",
//                 });
//             }
//         }


//         static async deleteUser(req: any, res: any) {
//         try {
//             const { userId } = req.params;

//             const member = await prisma.companyUser.findFirst({
//             where: {
//                 company_id: req.user.company_id,
//                 user_id: userId,
//                 deleted_at: null,
//             },
//             });

//             if (!member) {
//             return res.status(404).json({
//                 message: "Member not found",
//             });
//             }

//             await prisma.companyUser.update({
//             where: {
//                 company_id_user_id: {
//                 company_id: req.user.company_id,
//                 user_id: userId,
//                 },
//             },
//             data: {
//                 deleted_at: new Date(),
//             },
//             });

//             return res.json({
//             message: "Member removed successfully",
//             });
//         } catch (error) {
//             return res.status(500).json({
//             message: "Internal server error",
//             });
//         }
//         }
// }


// export default CompanyUserController;