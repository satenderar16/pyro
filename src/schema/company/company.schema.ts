// src/schema/company.schema.ts
import { z } from "zod";

export const CompanyParamsSchema = z.object({
  id: z.string().uuid("Invalid company ID"),
});

export const GetCompanyQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(10),
});

export const CreateCompanySchema = z.object({
  name: z
    .string()
    .min(1, "Company name is required")
    .max(255, "Company name must be at most 255 characters"),
  contact: z
    .string()
    .min(1, "Contact is required")
    .max(255, "Contact must be at most 255 characters"),
  address: z
    .string()
    .min(1, "Address is required")
    .max(500, "Address must be at most 500 characters"),
});

export const UpdateCompanySchema = z.object({
  name: z
    .string()
    .min(1, "Company name is required")
    .max(255, "Company name must be at most 255 characters")
    .optional(),
  contact: z
    .string()
    .max(255, "Contact must be at most 255 characters")
    .optional(),
  address: z
    .string()
    .max(500, "Address must be at most 500 characters")
    .optional(),
});

export type CreateCompanyInput = z.infer<typeof CreateCompanySchema>;
export type UpdateCompanyInput = z.infer<typeof UpdateCompanySchema>;