import { z } from "zod";
import { orderStatus, paymentType } from "../../../prisma/generated/client";

export const OrderIdSchema = z.object({
  id: z.uuid("Invalid order ID"),
});

export const OrderStatusSchema = z.object({
  status: z.enum(orderStatus, {
    error: () => ({ message: "Invalid order status" }),
  }),
});

const OrderItemSchema = z.object({
  option_id: z.string().uuid("Invalid option ID"),
  sell_unit_id: z.string().uuid("Invalid sell unit ID"),
  sell_quantity: z.coerce.number().positive("Sell quantity must be positive"),
});

export const CreateOrderSchema = z
  .object({
    order_name: z.string().trim().min(1, "Order name cannot be empty").optional().nullable(),
    payment_type: z.enum(paymentType, {
      error: () => ({ message: "Invalid payment type" }),
    }),
    discount: z.coerce.number().nonnegative("Discount cannot be negative").optional(),
    cash_amount: z.coerce.number().nonnegative("Cash amount cannot be negative").optional(),
    items: z.array(OrderItemSchema).min(1, "Order must contain at least one item"),
  })
  .strict();

export const UpdateOrderSchema = z
  .object({
    order_name: z.string().trim().min(1, "Order name cannot be empty").optional().nullable(),
    discount: z.coerce.number().nonnegative("Discount cannot be negative").optional(),
    cash_amount: z.coerce.number().nonnegative("Cash amount cannot be negative").optional(),
    items: z.array(OrderItemSchema).optional(), // Allows updating/replacing order line items
  })
  .strict();