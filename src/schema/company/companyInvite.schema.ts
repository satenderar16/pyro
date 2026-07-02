import { z } from "zod";



const IdSchema = z.string().uuid("Invalid ID");

export const CreateInviteSchema = z
  .object({
    invited_user_id: IdSchema,

    // Optional. If user does not send this, default is 2 days.
    expires_in_days: z.coerce
      .number()
      .int("Expiry must be an integer")
      .min(1, "Expiry must be at least 1 day")
      .max(30, "Expiry cannot exceed 30 days")
      .default(2),
  })
  .strict();

export const InviteQuerySchema = z.object({
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
});

export const InviteIdParamsSchema = z.object({
  id: IdSchema,
});

export const AcceptInviteParamsSchema = z.object({
  code: z
    .string()
    .trim()
    .min(8, "Invite code must be 8 characters")
    .max(8, "Invite code must be 8 characters")
    .regex(/^[A-Za-z0-9_-]+$/, "Invalid invite code")
    .transform((code) => code.toUpperCase()),
});

export type CreateInviteInput = z.infer<typeof CreateInviteSchema>;
export type InviteQueryInput = z.infer<typeof InviteQuerySchema>;
export type InviteIdParamsInput = z.infer<typeof InviteIdParamsSchema>;
export type AcceptInviteParamsInput = z.infer<typeof AcceptInviteParamsSchema>;