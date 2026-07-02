
import { z } from "zod";

import { userType } from "../../../prisma/generated"; 


export const RoleQuerySchema = z.object({
  page: z.coerce.number().int("Page must be an integer").min(1).default(1),
  limit: z.coerce.number().int("Limit must be an integer").min(1).max(100).default(20),
});

export const RoleParamSchema = z.object({
  roleId: z.string().uuid("Invalid role ID"),
});

export const CreateRoleBodySchema = z
  .object({
    name: z.string().trim().min(1, "Role name is required"),
    user_type: z.nativeEnum(userType, { error: () => ({ message: "Invalid user type" }) }),
    active: z.boolean().default(true),
    permissionIds: z.array(z.number().int("Permission ID must be an integer")).default([]),
  })
  .strict();

export const UpdateRoleBodySchema = z
  .object({
    name: z.string().trim().min(1, "Role name must be at least 1 character").optional(),
    user_type: z.nativeEnum(userType, { error: () => ({ message: "Invalid user type" }) }).optional(),
    active: z.boolean().optional(),
    permissionIds: z.array(z.number().int("Permission ID must be an integer")).optional(),
  })
  .strict();
