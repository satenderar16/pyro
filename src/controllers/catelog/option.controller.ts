import type { RequestHandler } from "express";
import prisma from "../../config/prisma";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";
import { CompanyAuthUserRequest } from "../../types/auth-request";
import { 
  OptionIdSchema, 
  CreateOptionSchema, 
  UpdateOptionSchema 
} from "../../schema/catelog/option.schema";

export default class OptionController {
  static getOne: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OptionIdSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid option ID", paramsResult.error.format())
        );
      }

      const { id } = paramsResult.data;
      const companyId = req.user!.company_id;

      const option = await prisma.options.findFirst({
        where: { id, deleted_at: null, items: { company_id: companyId } },
        include: { units: true },
      });

      if (!option) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Option not found"));
      }

      return res.status(200).json(ResponseBuilder.success(option, "Option retrieved successfully"));
    } catch (err: unknown) {
      console.error("Get Option Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to retrieve option"));
    }
  };

  static create: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const bodyResult = CreateOptionSchema.safeParse(req.body);
      if (!bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid request body")
        );
      }

      const { name, item_id, input_price, input_value, unit_id,min_sell_quantity,min_sell_unit_id, price_per_base_unit,type, currencyType: currency } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      // Verify item exists & belongs to company
      const item = await prisma.items.findFirst({
        where: { id: item_id, deleted_at: null, company_id: companyId },
      });
      if (!item) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Item not found"));
      }

      const option = await prisma.options.create({
        data: {
          name, 
          item_id,
          input_price,
          input_value,
          unit_id,
          min_sell_quantity,
          min_sell_unit_id,
          price_per_base_unit,
          type:type,
          currency,
          created_by: userId, updated_by: userId,
        },
      });

      return res.status(201).json(ResponseBuilder.success(option, "Option created successfully"));
    } catch (err: unknown) {
      console.error("Create Option Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to create option"));
    }
  };

  static update: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OptionIdSchema.safeParse(req.params);
      const bodyResult = UpdateOptionSchema.safeParse(req.body);

      if (!paramsResult.success || !bodyResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid input"
          )
        );
      }

      const { id } = paramsResult.data;
 const { name,input_price, input_value, unit_id,min_sell_quantity,min_sell_unit_id, price_per_base_unit,type, currencyType } = bodyResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const existing = await prisma.options.findFirst({
        where: { id, deleted_at: null, items: { company_id: companyId } },
      });
      if (!existing) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Option not found"));
      }

      const option = await prisma.options.update({
        where: { id },
        data: {
          ...(name !== undefined && { name }),
          ...(input_price !== undefined && { input_price }),
          ...(input_value !== undefined && { input_value }),
          ...(unit_id !== undefined && { unit_id }),
          ...(min_sell_quantity !== undefined && {min_sell_quantity}),
          ...(min_sell_unit_id !== undefined && {min_sell_unit_id}),
          ...(price_per_base_unit !== undefined && { price_per_base_unit }),
          ...(type !== undefined &&{type}),
          ...(currencyType !== undefined && { currency: currencyType }),
          updated_by: userId,
          updated_at: new Date(),
        },
      });

      return res.status(200).json(ResponseBuilder.success(option, "Option updated successfully"));
    } catch (err: unknown) {
      console.error("Update Option Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to update option"));
    }
  };

  static delete: RequestHandler = async (req: CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = OptionIdSchema.safeParse(req.params);
      if (!paramsResult.success) {
        return res.status(400).json(
          ResponseBuilder.error(ErrorCode.VALIDATION_ERROR, "Invalid option ID", paramsResult.error.format())
        );
      }

      const { id } = paramsResult.data;
      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const option = await prisma.options.findFirst({
        where: { id, deleted_at: null, items: { company_id: companyId } },
      });
      if (!option) {
        return res.status(404).json(ResponseBuilder.error(ErrorCode.NOT_FOUND, "Option not found"));
      }

      await prisma.options.update({
        where: { id },
        data: { deleted_at: new Date(), updated_by: userId },
      });

      return res.status(200).json(ResponseBuilder.success(null, "Option deleted successfully"));
    } catch (err: unknown) {
      console.error("Delete Option Error:", err);
      return res.status(500).json(ResponseBuilder.error(ErrorCode.INTERNAL_ERROR, "Failed to delete option"));
    }
  };
}