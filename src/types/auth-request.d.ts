// src/types/auth-request.ts
import { Request } from "express";
import { userType } from "../../prisma/generated";
import z from 'zod';

interface AuthUser {
  user_id: string;
  [key: string]: any;
}

export const CompanyAuthUser = z.object({
  user_id: z.uuid(),
  company_id: z.uuid(),
  role_id: z.uuid().nullable(),
  user_type: z.enum(userType),
  permissions: z.array(z.string()),
});

export type CompanyAuthUser = z.infer<typeof CompanyAuthUser>;


export interface AuthRequest extends Request {
  user?: AuthUser;
}

export interface CompanyAuthUserRequest extends Request{
  user?:CompanyAuthUser;
}