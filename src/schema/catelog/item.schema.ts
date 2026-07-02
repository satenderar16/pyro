import { z } from "zod";
import { currencyType, optionType } from "../../../prisma/generated/client";

export const ItemIdSchema = z.object({
  id: z.uuid("Invalid item ID"),
});

export const ItemQuerySchema = z.object({
  page: z.coerce.number().int("Page must be an integer").min(1).default(1),
  limit: z.coerce.number().int("Limit must be an integer").min(1).max(100).default(10),
});

export const CreateItemSchema = z
  .object({
    name: z.string().trim().min(1, "Item name is required"),
    cat_id: z.uuid("Invalid category ID"),
    // type: z.enum(optionType, { error: () => ({ message: "Invalid type" }) }),//it is not the part of items anymore.
    price_per_base_unit: z.coerce.number().positive("Price must be a positive number"),
    unit_id: z.uuid("Invalid unit ID"),
    image_url: z.string().optional().nullable(),
    currency: z.enum(currencyType, { error: () => ({ message: "Invalid currency" }) }).optional(),
  })
  .strict();

export const UpdateItemSchema = z
  .object({
    name: z.string().trim().min(1, "Name must be at least 1 character").optional(),
    image_url: z.string().optional().nullable(),
    // type: z.enum(optionType, { error: () => ({ message: "Invalid type" }) }).optional(),
  })
  .strict();

export type CreateItemInput = z.infer<typeof CreateItemSchema>;
export type UpdateItemInput = z.infer<typeof UpdateItemSchema>;