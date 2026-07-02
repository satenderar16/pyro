import { z } from "zod";
import { currencyType, optionType } from "../../../prisma/generated/client";

export const OptionIdSchema = z.object({
  id: z.uuid("Invalid option ID"),
});

export const CreateOptionSchema = z
  .object({
    name: z.string().trim().min(1, "Option name is required"),
    item_id: z.uuid("Invalid item ID"),
    input_price: z.coerce.number().positive("Input price must be a positive number"),
    input_value: z.coerce.number().positive("Input value must be a positive number"),
    unit_id: z.uuid("Invalid unit ID"),
    price_per_base_unit: z.coerce.number().positive("Price per base unit must be a positive number"),
    type:z.enum(optionType,{error:()=>({message:"Invalid type"})}),
    min_sell_quantity:z.coerce.number().positive("sell quantity must be a positive number"),
    min_sell_unit_id:z.uuid("Invalid min_sell_unit_id"),
    currencyType: z.enum(currencyType, { error: () => ({ message: "Invalid currency" }) }),
  })
  .strict();



  // TODO update this so we can calculate the ppbu when user create or update options within endpoints
export const UpdateOptionSchema = z
  .object({
    name: z.string().trim().min(1, "Option name is required").optional(),
    input_price: z.coerce.number().positive("Input price must be a positive number").optional(),
    input_value: z.coerce.number().positive("Input value must be a positive number").optional(),
    unit_id: z.uuid("Invalid unit ID").optional(),
    price_per_base_unit: z.coerce.number().positive("Price per base unit must be a positive number").optional(),
    type:z.enum(optionType,{error:()=>({message:"Invalid type"})}).optional(),
    min_sell_quantity:z.coerce.number().positive("sell quantity must be a positive number").optional(),
    min_sell_unit_id:z.uuid("Invalid min_sell_unit_id").optional(),
    currencyType: z.enum(currencyType, { error: () => ({ message: "Invalid currency" }) }).optional(),
  })
  .strict();

export type CreateOptionInput = z.infer<typeof CreateOptionSchema>;
export type UpdateOptionInput = z.infer<typeof UpdateOptionSchema>;