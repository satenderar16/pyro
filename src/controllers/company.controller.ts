import prisma from "../config/prisma";
import { userType } from "../../prisma/generated";



//TODO addd deleted_at to make sure only the company that are not deleted are access to the user:
export const getCompany = async (req: any, res: any) => {
try {
    const { company_id } = req.params;
    
    const company = await prisma.company.findUnique({
      where: { id: company_id },
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
}

//read company: all the companies:
 // supports: ?limit=10&page=1 pagination

export const getJoinedCompany = async (req: any, res: any) => {
  try {
    const userId = req.user.user_id;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const companies = await prisma.companyUser.findMany({
      where: {
        user_id: userId,
      },
      include: {
        company: true,
        role: true,
      },
      skip,
      take: limit + 1, // fetch one extra
    });

    const hasNext = companies.length > limit;

    if (hasNext) {
      companies.pop(); // remove the extra record
    }

    return res.status(200).json({
      success: true,
      page,
      limit,
      has_next: hasNext,
      data: companies,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
}


// create category:


export const postCreatCompany = async(req:any,res:any)=>{

  try {
    const { name, contact, address } = req.body;
    const userId = req.user.user_id;

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

      // Create owner role
      const ownerRole = await tx.companyRole.create({
        data: {
          company_id: company.id,
          name: "Owner",
          is_system: true,
        },
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
        },
        include: {
          company: true,
          role: true,
        },
      });


      return companyUser;
    });

    return res.status(201).json({
      success: true,
      message: "Company created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create company",
    });
  }
};
// update category
//  let companyUser = companyUsers?.map(cu => ({
//   company_id: cu.company.id,
//   role_id: cu.role_id,
//   user_type: cu.user_type,
//   permissions:
//     cu.role?.role_permissions.map(rp => rp.permission.permission_key) ?? [],
// }));

export const updateCompany = async (req:any,res:any)=>{
 try {
        const { company_id } = req.params;
        const { name, contact, address } = req.body;
        const userId = req.user.user_id;
       

        const membership = await prisma.companyUser.findFirst({
        where: {
            user_id: userId,
            company_id
        },
        });

        if (!membership) {
        return res.status(403).json({
            success: false,
            message: "You are not part of this company",
        });
        }

        const companyUser = await prisma.companyUser.findFirst({
        where: {
        company_id ,
            user_id: userId,
            user_type: userType.OWNER,
        },
        });

        if (!companyUser) {
        return res.status(403).json({
            success: false,
            message: "Only company owners can update company details",
        });
        }

        const company = await prisma.company.update({
        where: {
            id: company_id,
        },
        data: {
            name,
            contact,
            address,
        },
        });

        return res.status(200).json({
        success: true,
        message: "Company updated successfully",
        data: company,
        });

} catch (error: any) {
        console.error(error);

        return res.status(500).json({
        success: false,
        message: "Failed to update company",
        });
}
}


// delete category:

//TODO
export const deleteCompany = async (req:any,res:any)=>{
    
   try {
        const { company_id } = req.params;
        const { name, contact, address } = req.body;
        const userId = req.user.user_id;
       

        const membership = await prisma.companyUser.findFirst({
        where: {
            user_id: userId,
            company_id
        },
        });

        if (!membership) {
        return res.status(403).json({
            success: false,
            message: "You are not part of this company",
        });
        }

        const companyUser = await prisma.companyUser.findFirst({
        where: {
        company_id ,
            user_id: userId,
            user_type: userType.OWNER,
        },
        });

        if (!companyUser) {
        return res.status(403).json({
            success: false,
            message: "Only company owners can update company details",
        });
        }
        //TODO: add deleted_at column deleted_by so user that are part of that company won't get cascade deleted:
        const company = await prisma.company.delete({
        where: {
            id: company_id,
        }
        });

        return res.status(200).json({
        success: true,
        message: "Company deleted successfully",
        
        });

} catch (error: any) {
        console.error(error);

        return res.status(500).json({
        success: false,
        message: "Failed to update company",
        });
}
}


