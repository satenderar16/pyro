import type { RequestHandler } from "express";
import crypto from "crypto";

import prisma from "../../config/prisma";
import { ResponseBuilder } from "../../utils/responses/builder.response";
import { ErrorCode } from "../../utils/errors/codes.error";

import {
  CreateInviteSchema,
  InviteQuerySchema,
  InviteIdParamsSchema,
  AcceptInviteParamsSchema,
} from "../../schema/company/companyInvite.schema";

import { AuthRequest, CompanyAuthUserRequest } from "../../types/auth-request";

class InviteController {
  static createInvite: RequestHandler = async (req:CompanyAuthUserRequest, res) => {
    try {
      const bodyResult = CreateInviteSchema.safeParse(req.body);

      if (!bodyResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Validation failed"
          )
        );
        return;
      }

      const { invited_user_id, expires_in_days } = bodyResult.data;

      const companyId = req.user!.company_id;
      const createdBy = req.user!.user_id;
      const creatorUserType = req.user!.user_type;

     
      if (!companyId || !creatorUserType) {
        res.status(403).json(
          ResponseBuilder.error(
            ErrorCode.FORBIDDEN,
            "Company context is required"
          )
        );
        return;
      }

      if (invited_user_id === createdBy) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "You cannot invite yourself"
          )
        );
        return;
      }

      const invitedUser = await prisma.users.findUnique({
        where: {
          id: invited_user_id,
        },
      });

      if (!invitedUser) {
        res.status(404).json(
          ResponseBuilder.error(
            ErrorCode.NOT_FOUND,
            "Invited user not found"
          )
        );
        return;
      }

      const existingMember = await prisma.companyUser.findFirst({
        where: {
          company_id: companyId,
          user_id: invited_user_id,
          deleted_at: null,
        },
      });

      if (existingMember) {
        res.status(409).json(
          ResponseBuilder.error(
            ErrorCode.CONFLICT,
            "User is already a member of this company"
          )
        );
        return;
      }

      const existingInvite = await prisma.companyInvite.findFirst({
        where: {
          company_id: companyId,
          invited_user_id,
          deleted_at: null,
          expired_at: {
            gt: new Date(),
          },
        },
      });

      if (existingInvite) {
        res.status(409).json(
          ResponseBuilder.error(
            ErrorCode.CONFLICT,
            "An active invite already exists for this user"
          )
        );
        return;
      }

      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + expires_in_days);

      const inviteCode = crypto
        .randomBytes(6)
        .toString("base64url")
        .slice(0, 8)
        .toUpperCase();

      const invite = await prisma.companyInvite.create({
        data: {
          company_id: companyId,
          invited_user_id,
          created_by: createdBy,
          creator_user_type: creatorUserType,
          invite_code: inviteCode,
          expired_at: expiresAt,
        },
      });

      res.status(201).json(
        ResponseBuilder.success(
          invite,
          "Invite created successfully"
        )
      );
      return;
    } catch (error: unknown) {
      console.error("Create Invite Error:", error);

      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to create invite"
        )
      );
      return;
    }
  };

  static getReceivedInvites: RequestHandler = async (req:AuthRequest, res) => {
    try {
      const queryResult = InviteQuerySchema.safeParse(req.query);

      if (!queryResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid query parameters",
            queryResult.error.format()
          )
        );
        return;
      }

      const userId = req.user?.user_id;

      if (!userId) {
        res.status(401).json(
          ResponseBuilder.error(
            ErrorCode.AUTH_UNAUTHORIZED,
            "Authentication required"
          )
        );
        return;
      }

      const { page, limit } = queryResult.data;
      const skip = (page - 1) * limit;

      const invites = await prisma.companyInvite.findMany({
        where: {
          invited_user_id: userId,
          deleted_at: null,
        },
        orderBy: {
          created_at: "desc",
        },
        include: {
          invite_company: true,
        },
        skip,
        take: limit + 1,
      });

      const hasNextPage = invites.length > limit;

      if (hasNextPage) {
        invites.pop();
      }

      res.status(200).json(
        ResponseBuilder.success(
          {
            invites,
            pagination: {
              page,
              limit,
              has_next: hasNextPage,
            },
          },
          "Received invites retrieved successfully"
        )
      );
      return;
    } catch (error: unknown) {
      console.error("Get Received Invites Error:", error);

      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to retrieve received invites"
        )
      );
      return;
    }
  };

  static getReceivedInvite: RequestHandler = async (req:AuthRequest, res) => {
    try {
      const paramsResult = InviteIdParamsSchema.safeParse(req.params);

      if (!paramsResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid invite id",
            paramsResult.error.format()
          )
        );
        return;
      }

      const userId = req.user!.user_id;

      if (!userId) {
        res.status(401).json(
          ResponseBuilder.error(
            ErrorCode.AUTH_UNAUTHORIZED,
            "Authentication required"
          )
        );
        return;
      }

      const { id } = paramsResult.data;

      const invite = await prisma.companyInvite.findFirst({
        where: {
          id,
          invited_user_id: userId,
          deleted_at: null,
        },
        include: {
          invite_company: true,
        },
      });

      if (!invite) {
        res.status(404).json(
          ResponseBuilder.error(
            ErrorCode.NOT_FOUND,
            "Invite not found"
          )
        );
        return;
      }

      res.status(200).json(
        ResponseBuilder.success(
          invite,
          "Invite retrieved successfully"
        )
      );
      return;
    } catch (error: unknown) {
      console.error("Get Received Invite Error:", error);

      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to retrieve invite"
        )
      );
      return;
    }
  };

  static getSentInvites: RequestHandler = async (req:CompanyAuthUserRequest, res) => {
    try {
      const queryResult = InviteQuerySchema.safeParse(req.query);

      if (!queryResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid query parameters")
        );
        return;
      }

      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      

      const { page, limit } = queryResult.data;
      const skip = (page - 1) * limit;

      const invites = await prisma.companyInvite.findMany({
        where: {
          company_id: companyId,
          created_by: userId,
          deleted_at: null,
        },
        include: {
          user_invited: {
            select: {
              id: true,
              name: true,
              username: true,
              email: true,
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
        skip,
        take: limit + 1,
      });

      const hasNextPage = invites.length > limit;

      if (hasNextPage) {
        invites.pop();
      }

      res.status(200).json(
        ResponseBuilder.success(
          {
            invites,
            pagination: {
              page,
              limit,
              has_next: hasNextPage,
            },
          },
          "Sent invites retrieved successfully"
        )
      );
      return;
    } catch (error: unknown) {
      console.error("Get Sent Invites Error:", error);

      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to retrieve sent invites"
        )
      );
      return;
    }
  };

  static getSentInvite: RequestHandler = async (req:CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = InviteIdParamsSchema.safeParse(req.params);

      if (!paramsResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid invite id",
            paramsResult.error.format()
          )
        );
        return;
      }

      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

     

      const { id } = paramsResult.data;

      const invite = await prisma.companyInvite.findFirst({
        where: {
          id,
          company_id: companyId,
          created_by: userId,
          deleted_at: null,
        },
        include: {
          user_invited: {
            select: {
              id: true,
              name: true,
              username: true,
              email: true,
            },
          },
        },
      });

      if (!invite) {
        res.status(404).json(
          ResponseBuilder.error(
            ErrorCode.NOT_FOUND,
            "Invite not found"
          )
        );
        return;
      }

      res.status(200).json(
        ResponseBuilder.success(
          invite,
          "Invite retrieved successfully"
        )
      );
      return;
    } catch (error: unknown) {
      console.error("Get Sent Invite Error:", error);

      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to retrieve invite"
        )
      );
      return;
    }
  };

  static deleteInvite: RequestHandler = async (req:CompanyAuthUserRequest, res) => {
    try {
      const paramsResult = InviteIdParamsSchema.safeParse(req.params);

      if (!paramsResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid invite id"
          )
        );
        return;
      }

      const companyId = req.user!.company_id;
      const userId = req.user!.user_id;

      const { id } = paramsResult.data;

      const invite = await prisma.companyInvite.findFirst({
        where: {
          id,
          company_id: companyId,
          created_by: userId,
          deleted_at: null,
        },
      });

      if (!invite) {
        res.status(404).json(
          ResponseBuilder.error(
            ErrorCode.NOT_FOUND,
            "Invite not found"
          )
        );
        return;
      }

      const deletedInvite = await prisma.companyInvite.update({
        where: {
          id,
        },
        data: {
          deleted_at: new Date(),
        },
      });

      res.status(200).json(
        ResponseBuilder.success(
          deletedInvite,
          "Invite deleted successfully"
        )
      );
      return;
    } catch (error: unknown) {
      console.error("Delete Invite Error:", error);

      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to delete invite"
        )
      );
      return;
    }
  };

  static acceptInvite: RequestHandler = async (req:AuthRequest, res) => {
    try {
      const paramsResult = AcceptInviteParamsSchema.safeParse(req.params);

      if (!paramsResult.success) {
        res.status(400).json(
          ResponseBuilder.error(
            ErrorCode.VALIDATION_ERROR,
            "Invalid invite code"
          )
        );
        return;
      }

      const userId = req.user!.user_id;

      const { code } = paramsResult.data;

      const invite = await prisma.companyInvite.findFirst({
        where: {
          invite_code: code,
          invited_user_id: userId,
          deleted_at: null,
          expired_at: {
            gt: new Date(),
          },
        },
      });

      if (!invite) {
        res.status(404).json(
          ResponseBuilder.error(
            ErrorCode.NOT_FOUND,
            "Invalid or expired invite"
          )
        );
        return;
      }

      if (invite.is_redeemed) {
        res.status(409).json(
          ResponseBuilder.error(
            ErrorCode.CONFLICT,
            "You have already accepted this invite. Wait for admin verification"
          )
        );
        return;
      }

      const result = await prisma.companyInvite.update({
        where: {
          id: invite.id,
        },
        data: {
          is_redeemed: true,
        },
      });

      res.status(200).json(
        ResponseBuilder.success(
          result,
          "Invite accepted successfully. Wait for admin to verify and assign you a role"
        )
      );
      return;
    } catch (error: unknown) {
      res.status(500).json(
        ResponseBuilder.error(
          ErrorCode.INTERNAL_ERROR,
          "Failed to accept invite"
        )
      );
      return;
    }
  };
}

export default InviteController;