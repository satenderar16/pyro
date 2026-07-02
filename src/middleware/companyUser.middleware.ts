import prisma from "../config/prisma";
import { userType } from "../../prisma/generated";
import { AuthRequest, CompanyAuthUserRequest } from "../types/auth-request";
import type { RequestHandler } from "express";

import { ResponseBuilder } from "../utils/responses/builder.response";
import { ErrorCode } from "../utils/errors/codes.error";
import { z } from "zod";

const companyUserContextSchema = z.object({
  userId: z.uuid("Invalid user ID"),
  companyId: z.uuid("Invalid company ID"),
});

export const companyUserMiddleware: RequestHandler = async (req: CompanyAuthUserRequest, res, next) => {
  try {
    const result = companyUserContextSchema.safeParse({
      userId: req.user!.user_id,
      companyId: req.headers["x-company-id"],
    });

    if (!result.success) {
      console.log("companyMiddleWare: validation error");
      return res.status(400).json(
        ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid company or user identifier")
      );
    }

    const { userId, companyId } = result.data;

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
      return res.status(403).json(
        ResponseBuilder.error(ErrorCode.FORBIDDEN, "Not a member of this company")
      );
    }

    if (!membership.role_id) {
      return res.status(403).json(
        ResponseBuilder.error(ErrorCode.NOT_AUTHORIZED_FOR_COMPANY, "You don't have any role assigned")
      );
    }

    // 2. Attach tenant context
    req.user = {
      user_id: userId,
      company_id: companyId,
      user_type: membership.user_type,
      role_id: membership.role_id,
      permissions: []
    };

    // 3. OWNER shortcut (no DB permission fetch needed)
    if (membership.user_type === userType.OWNER) {
      req.user.permissions = ["*"];
      return next();
    }

    // 4. Load role permissions
    // TODO add a redis layer to make sure to reduce the overhead. 
    // reduce the db load:
    const rolePermissions = await prisma.rolePermission.findMany({
      where: {
        role_id: membership.role_id,
      },
      select: {
        permission: {
          select: {
            permission_key: true,
          },
        },
      },
    });

    req.user.permissions = rolePermissions.map(rp => rp.permission.permission_key);
    next();
  } catch (error) {
    console.log("companyMiddleware Error:");
    next(error);
  }
};

export const authorizeAll = (...requiredPermissions: string[]) => (req: any, res: any, next: any) => {
  try {
    const permissions = req.user?.permissions || [];

    // Owner bypass
    if (permissions.includes("*")) return next();
    
    // No permissions required for this route
    if (requiredPermissions.length === 0) return next();

    // Check if user has ALL required permissions
    const allowed = requiredPermissions.every(p => permissions.includes(p));

    if (!allowed) {
      return res.status(403).json(
        ResponseBuilder.error(ErrorCode.FORBIDDEN, "Missing required permissions")
      );
    }

    next();
  } catch (error) {
    console.error("authorizeAll error:", error);
    return res.status(500).json(
      ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Authorization access denied")
    );
  }
};