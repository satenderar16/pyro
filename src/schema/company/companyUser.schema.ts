import type { RequestHandler } from "express";
import { z } from "zod";
import prisma from "../../config/prisma";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { userType } from "../../../prisma/generated"; // Adjust path if needed

// ==================== Zod Schemas ====================
const UserIdSchema = z.uuid("Invalid user ID");

export const CompanyUserQuerySchema = z.object({
  page: z.coerce
    .number()
    .int("Page must be an integer")
    .min(1, "Page must be at least 1")
    .default(1),
  limit: z.coerce
    .number()
    .int("Limit must be an integer")
    .min(1, "Limit must be at least 1")
    .max(100, "Limit cannot exceed 100")
    .default(20),
  verified: z.coerce.boolean().optional(),
});

export const UserIdParamsSchema = z.object({
  userId: UserIdSchema,
});

export const VerifyMemberBodySchema = z
  .object({
    role_id: z.uuid("Invalid role ID"),
    user_type: z.enum(userType, { error: () => ({ message: "Invalid user type" }) }),
  })
  .strict();

export const UpdateMemberBodySchema = z
  .object({
    role_id: z.uuid("Invalid role ID").optional(),
    user_type: z.enum(userType, { error: () => ({ message: "Invalid user type" }) }).optional(),
  })
  .strict();
