import prisma from "../../config/prisma";
import { userType,Prisma } from "../../../prisma/generated";
import { Request, RequestHandler, Response } from "express";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { AuthRequest } from "../../types/auth-request";
import {
  CompanyParamsSchema,
  CreateCompanySchema,
  UpdateCompanySchema,
  GetCompanyQuerySchema,
  CreateCompanyInput,
  UpdateCompanyInput,
} from "../../schema/company/company.schema";

// This enpoint is for let all authenticated user to see details about company, either they have joined those or not.
export const getCompany:RequestHandler = async (req: Request, res: Response) => {
  try {
    // Validate params
    const paramsResult = CompanyParamsSchema.safeParse(req.params);
    if (!paramsResult.success) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Invalid company ID"
        )
      );
    }

    const { id: company_id } = paramsResult.data;
   

    const company = await prisma.company.findUnique({
      where: {
        id: company_id,
        deleted_at: null,
      },
    });

    if (!company) {
      return res.status(404).json(
        ResponseBuilder.error(
          ErrorCode.NOT_FOUND,
          "Company not found"
        )
      );
    }

    return res.status(200).json(
      ResponseBuilder.success(company, "Company retrieved successfully")
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Something went wrong"
      )
    );
  }
}


//read company: all the companies:
 // supports: ?limit=10&page=1 pagination

export const getJoinedCompany:RequestHandler = async (req:AuthRequest,res:Response)=> {

  try {
     

    // Validate query params
    const queryResult = GetCompanyQuerySchema.safeParse(req.query);
    if (!queryResult.success) {
       res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Invalid query parameters"
        )
      );
      return;
    }

    const { page, limit } = queryResult.data;
    const skip = (page - 1) * limit;
    const userId = req.user!.user_id;

    const [companies, totalCount] = await Promise.all([
      prisma.companyUser.findMany({
        where: {
          user_id: userId,
          deleted_at: null,
        },
        include: {
          company: true,
          role: true,
        },
        skip,
        take: limit + 1,
      }),
      prisma.companyUser.count({
        where: {
          user_id: userId,
          deleted_at: null,
        },
      }),
    ]);

    const hasNext = companies.length > limit;
    if (hasNext) {
      companies.pop();
    }

    const totalPages = Math.ceil(totalCount / limit);

     res.status(200).json(
      ResponseBuilder.success(
        {
          companies,
          pagination: {
            page,
            limit,
            total_count: totalCount,
            total_pages: totalPages,
            has_next: hasNext,
          },
        },
        "Companies retrieved successfully"
      )
    );
     return;
  } catch (error) {
    console.error(error);
     res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Something went wrong"
      )
    );
    return;
  }
}



// create category:


export const postCreatCompany:RequestHandler = async(req:AuthRequest,res:Response)=>{

  try {
    const bodyResult = CreateCompanySchema.safeParse(req.body);
    
    if (!bodyResult.success) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Validation failed"
        )
      );
    }

    const { name, contact, address } = bodyResult.data;
    const userId = req.user!.user_id;// it is protected route req.user can't be null or undefined.

    // action we role back in db, to make sure either all the action completed or none, promises.all lead to inconsistency:
    const result = await prisma.$transaction(async (tx) => {


        // Create company
        const company = await tx.company.create({
          data: {
            name,
            contact,
            address,
          },
        });

      // system roles with permissions
        const [ownerRole, adminRole] = await Promise.all([
          tx.companyRole.create({
            data: {
              company_id: company.id,
              name: "Owner",
              is_system: true,
              active:true,
              user_type:userType.OWNER
            },
          }),

          tx.companyRole.create({
            data: {
              company_id: company.id,
              name: "Admin",
              is_system: true,
                active:true,
              user_type:userType.ADMIN
            },
          }),
        ]);

        // Fetch permissions from DB
        const permissions = await tx.permission.findMany({
          select: {
            id: true,
            permission_key: true,
          },
        });

        // Owner = full access
        const ownerPermissions = permissions;

        // Admin = restricted
        const adminPermissions = permissions.filter(
          (p) =>
            !p.permission_key.startsWith("admin.") &&
            p.permission_key !== "company.update"
        );

        // Map role permissions
        await tx.rolePermission.createMany({
          data: [
            ...ownerPermissions.map((p) => ({
              role_id: ownerRole.id,
              permission_id: p.id,
            })),

            ...adminPermissions.map((p) => ({
              role_id: adminRole.id,
              permission_id: p.id,
            })),
          ],
        });

      // Link creator as owner
       const companyUser = await tx.companyUser.create({
        data: {
          company_id: company.id,
          user_id: userId,
          role_id: ownerRole.id,
          user_type: userType.OWNER,
          verified_user: true,
          verified_by: userId,
          verified_at: new Date(),
          created_by:userId,
          updated_by:userId,
          updated_at:new Date()
        },
        include: {
          company: true,
          role: true,
        },
      });


      return companyUser;
    });

    return res.status(201).json(
      ResponseBuilder.success(result, "Company created successfully")
    );
  } catch (error) {
    console.error(error);
 return res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Failed to create company"
      )
    );
  }
}

export const updateCompany: RequestHandler = async (req:AuthRequest, res:Response) => {
  try {
    const paramsValidation = CompanyParamsSchema.safeParse(req.params);

    if (!paramsValidation.success) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Invalid company id"
        )
      );
    
    }

    const bodyValidation = UpdateCompanySchema.safeParse(req.body);

    if (!bodyValidation.success) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Validation failed"

        )
      );
     
    }

    const { id: company_id } = paramsValidation.data;
    const updateData: UpdateCompanyInput = bodyValidation.data;

    const userId = req.user!.user_id;

  
    const existingCompany = await prisma.company.findFirst({
      where: {
        id: company_id,
        deleted_at: null,
      },
    });

    if (!existingCompany) {
     return res.status(404).json(
        ResponseBuilder.error(
          ErrorCode.NOT_FOUND,
          "Company not found or no longer exists"
        )
      );
     
    }

    const membership = await prisma.companyUser.findFirst({
      where: {
        user_id: userId,
        company_id,
        deleted_at: null,
      },
    });

    if (!membership) {
     return res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.FORBIDDEN,
          "You are not part of this company"
        )
      );
     
    }

    if (membership.user_type !== userType.OWNER) {
      res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.FORBIDDEN,
          "Only company owners can update company details"
        )
      );
      return;
    }
    const data: Prisma.companyUpdateInput = {};
    if (updateData.name !== undefined) {
      data.name = updateData.name;
    }

    if (updateData.contact !== undefined) {
      data.contact = updateData.contact;
    }

    if (updateData.address !== undefined) {
      data.address = updateData.address;
    }
    if (Object.keys(data).length === 0) {
     return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "At least one field is required to update"
        )
      );
     
    }
    const company = await prisma.company.update({
      where: {
        id: company_id,
      },
      data
    });

    res.status(200).json(
      ResponseBuilder.success(
        company,
        "Company updated successfully"
      )
    );
    return;
  } catch (error: unknown) {
    console.error("Update Company Error:", error);

    res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Failed to update company"
      )
    );
    return;
  }
};


export const deleteCompany: RequestHandler = async (req:AuthRequest, res:Response) => {
  try {
    const paramsValidation = CompanyParamsSchema.safeParse(req.params);

    if (!paramsValidation.success) {
      res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Invalid company id"
        )
      );
      return;
    }

    const { id: company_id } = paramsValidation.data;

    const userId = req.user!.user_id;

  

    const existingCompany = await prisma.company.findFirst({
      where: {
        id: company_id,
        deleted_at: null,
      },
    });

    if (!existingCompany) {
      res.status(404).json(
        ResponseBuilder.error(
          ErrorCode.NOT_FOUND,
          "Company not found or already deleted"
        )
      );
      return;
    }

    const membership = await prisma.companyUser.findFirst({
      where: {
        user_id: userId,
        company_id,
        deleted_at: null,
      },
    });

    if (!membership) {
      res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.FORBIDDEN,
          "You are not part of this company"
        )
      );
      return;
    }

    if (membership.user_type !== userType.OWNER) {
      res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.FORBIDDEN,
          "Only company owners can delete company details"
        )
      );
      return;
    }

    const company = await prisma.company.update({
      where: {
        id: company_id,
      },
      data: {
        deleted_at: new Date(),
      },
    });

    res.status(200).json(
      ResponseBuilder.success(
        company,
        "Company deleted successfully"
      )
    );
    return;
  } catch (error: unknown) {
    console.error("Delete Company Error:", error);

    res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Failed to delete company"
      )
    );
    return;
  }
};


