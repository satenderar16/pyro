import prisma from "../config/prisma";
import { userType } from "../../prisma/generated";



export const companyUserMiddleware = async (req: any, res: any, next: any) => {
  try {
    const userId = req.user.user_id;
    const companyId = req.headers["x-company-id"];

    // Only validate company input
    if (!companyId) {
      return res.status(400).json({
        success: false,
        message: "Company is not found",
      });
    }

    // 1. Check membership (tenant isolation boundary)
    // TODO add a redis layer to make sure to reduce the overhead. 
    // reduce the db load:
    const membership = await prisma.companyUser.findFirst({
      where: {
        user_id: userId,
        company_id: companyId,
      },
      select: {
        role_id: true,
        user_type: true,
      },
    });

    if (!membership) {
      return res.status(403).json({
        success: false,
        message: "Not a member of this company",
      });
    }

    // 2. Attach tenant context
    req.user.company_id = companyId;
    req.user.role_id = membership.role_id;
    req.user.user_type = membership.user_type;

    // 3. OWNER shortcut (no DB permission fetch needed)
    if (membership.user_type === userType.OWNER) {
      req.user.permissions = ["*"];
      return next();
    }

    let rolePermission= new Array();
    if(membership.role_id){
    // 4. Load role permissions
     // TODO add a redis layer to make sure to reduce the overhead. 
    // reduce the db load:
         rolePermission = await prisma.rolePermission.findMany({
        where: {
            role_id: membership.role_id ,
        },
        select: {
            permission: {
            select: {
                permission_key: true,
            },
            },
        },
        });
    }

    

    req.user.permissions = rolePermission.map(
      (rp) => rp.permission.permission_key
    );

    next();
  } catch (error) {
    next(error);
  }
};



export const authorizeAll =
  (...requiredPermissions: string[]) =>
  (req: any, res: any, next: any) => {
    try {
      const permissions = req.user?.permissions || [];

      if (isOwner(permissions)) {
        return next();
      }

      if (!requiredPermissions.length) {
        return next(); // no permissions required
      }

      const allowed = requiredPermissions.every(p =>
        hasPermission(permissions, p)
      );

      if (!allowed) {
         return res.status(403).json({
    success: false,
    message:"Missing required permissions"
  });
      }

      next();
    } catch (error) {
      console.error("authorizeAll error:", error);
      return res.status(500).json({
        success: false,
        message: "Authorization error",
      });
    }
  };

const hasPermission = (
  userPermissions: string[],
  permission: string
) => userPermissions.includes(permission);

const isOwner = (permissions: string[]) =>
  permissions.includes("*");
