
import { z } from "zod";


export const CategoryIdSchema = z.object({
  id: z.uuid("Invalid category ID"),
});

export const CategoryParamSchema = z.object({
  id: z.uuid("Invalid category ID"),
});

export const CategoryQuerySchema = z.object({
  page: z.coerce.number().int("Page must be an integer").min(1).default(1),
  limit: z.coerce.number().int("Limit must be an integer").min(1).max(100).default(10),
});

export const CreateCategorySchema = z
  .object({
    name: z.string().trim().min(1, "Category name is required"),
    parent_id: z.uuid("Invalid parent ID").optional().nullable(),
  })
  .strict();

export const UpdateCategorySchema = z
  .object({
    name: z.string().trim().min(1, "Category name is required"),
  })
  .strict();
