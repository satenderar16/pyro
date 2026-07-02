import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";
import { userType } from "../../../prisma/generated";

const COMPANY_BASE = "/api/company";
const INVITE_BASE = "/api/company/invites";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
  createInvite: () => `${INVITE_BASE}`,

  receivedInvites: () => `${INVITE_BASE}/received`,

  receivedInvite: (inviteId: string) =>
    `${INVITE_BASE}/received/${inviteId}`,

  sentInvites: () => `${INVITE_BASE}/sent`,

  sentInvite: (inviteId: string) =>
    `${INVITE_BASE}/sent/${inviteId}`,

  acceptInvite: (code: string) =>
    `${INVITE_BASE}/accept/${code}`,

  deleteInvite: (inviteId: string) =>
    `${INVITE_BASE}/${inviteId}`,
};

type UserPayload = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type AuthFixture = {
  accessToken: string;
  userId: string;
  payload: UserPayload;
};

type CompanyPayload = {
  name: string;
  contact: string;
  address: string;
};

type CompanyFixture = {
  companyId: string;
  payload: CompanyPayload;
};

type InviteFixture = {
  inviteId: string;
  inviteCode: string;
};

const uniqueId = () => {
  return `${Date.now()}_${Math.floor(Math.random() * 100000)}`;
};

const createUserPayload = (): UserPayload => {
  const id = uniqueId();

  return {
    name: "Test User",
    username: `testuser_${id}`,
    email: `test_${id}@example.com`,
    password: "password123",
  };
};

const createCompanyPayload = (): CompanyPayload => {
  const id = uniqueId();

  return {
    name: `Test Company ${id}`,
    contact: `980000${Math.floor(Math.random() * 10000)}`,
    address: "Kathmandu, Nepal",
  };
};

const createAuthenticatedUser = async (): Promise<AuthFixture> => {
  const payload = createUserPayload();

  const signupRes = await request(app)
    .post("/api/auth/signup")
    .send(payload);

  expect(signupRes.status).toBe(201);

  const signinRes = await request(app)
    .post("/api/auth/signin")
    .send({
      email: payload.email,
      password: payload.password,
    });

  expect(signinRes.status).toBe(200);

  const accessToken: unknown = signinRes.body.data?.access_token;

  if (typeof accessToken !== "string") {
    throw new Error("Signin response did not return access_token");
  }

  const dbUser = await prisma.users.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!dbUser) {
    throw new Error("User was not created in database");
  }

  return {
    accessToken,
    userId: dbUser.id,
    payload,
  };
};

const createCompany = async (
  accessToken: string
): Promise<CompanyFixture> => {
  const payload = createCompanyPayload();

  const res = await request(app)
    .post(COMPANY_BASE)
    .set("Authorization", `Bearer ${accessToken}`)
    .send(payload);

  expect(res.status).toBe(201);

  const companyId: unknown = res.body.data?.company?.id;

  if (typeof companyId !== "string") {
    throw new Error("Create company response did not return company id");
  }

  return {
    companyId,
    payload,
  };
};

const createInvite = async (
  companyId: string,
  creatorAccessToken: string,
  invitedUserId: string
): Promise<InviteFixture> => {
  const res = await request(app)
    .post(ROUTES.createInvite())
    .set("Authorization", `Bearer ${creatorAccessToken}`)
    .set(COMPANY_ID_HEADER, companyId)
    .send({
      invited_user_id: invitedUserId,
      expires_in_days: 2,
    });

  expect(res.status).toBe(201);

  const inviteId: unknown = res.body.data?.id;
  const inviteCode: unknown = res.body.data?.invite_code;

  if (typeof inviteId !== "string") {
    throw new Error("Create invite response did not return invite id");
  }

  if (typeof inviteCode !== "string") {
    throw new Error("Create invite response did not return invite code");
  }

  return {
    inviteId,
    inviteCode,
  };
};

const addUserToCompanyAsAdmin = async (
  companyId: string,
  userId: string,
  createdBy: string
) => {
  const adminRole = await prisma.companyRole.findFirst({
    where: {
      company_id: companyId,
      user_type: userType.ADMIN,
      deleted_at: null,
    },
  });

  if (!adminRole) {
    throw new Error("Admin role not found");
  }

  return prisma.companyUser.create({
    data: {
      company_id: companyId,
      user_id: userId,
      role_id: adminRole.id,
      user_type: userType.ADMIN,
      verified_user: true,
      verified_by: createdBy,
      verified_at: new Date(),
      created_by: createdBy,
      updated_by: createdBy,
      updated_at: new Date(),
    },
  });
};

describe("CompanyInvite API", () => {
  beforeEach(async () => {
    await prisma.companyInvite.deleteMany();
    await prisma.rolePermission.deleteMany();
    await prisma.companyUser.deleteMany();
    await prisma.companyRole.deleteMany();
    await prisma.company.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.users.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("Create Invite", () => {
    it("should create invite successfully", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({
          invited_user_id: invitedUser.userId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Invite created successfully");

      expect(res.body.data.company_id).toBe(company.companyId);
      expect(res.body.data.invited_user_id).toBe(invitedUser.userId);
      expect(res.body.data.created_by).toBe(owner.userId);
      expect(res.body.data.creator_user_type).toBe(userType.OWNER);
      expect(res.body.data.invite_code).toBeDefined();
      expect(res.body.data.expired_at).toBeDefined();
      expect(res.body.data.deleted_at).toBeNull();
    });

    it("should reject create invite without company header", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .send({
          invited_user_id: invitedUser.userId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.message).toBe("Invalid company or user identifier");
    });

    it("should reject create invite if user is not member of selected company", async () => {
      const ownerOne = await createAuthenticatedUser();
      const ownerTwo = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();

      const companyTwo = await createCompany(ownerTwo.accessToken);

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${ownerOne.accessToken}`)
        .set(COMPANY_ID_HEADER, companyTwo.companyId)
        .send({
          invited_user_id: invitedUser.userId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.message).toBe("Not a member of this company");
    });

    it("should reject invalid invite body", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({
          invited_user_id: "invalid-id",
          expires_in_days: 0,
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("should reject self invite", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({
          invited_user_id: owner.userId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("should reject invite for unknown user", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const fakeUserId = "00000000-0000-0000-0000-000000000000";

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({
          invited_user_id: fakeUserId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });

    it("should reject invite if user is already company member", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      await addUserToCompanyAsAdmin(
        company.companyId,
        invitedUser.userId,
        owner.userId
      );

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({
          invited_user_id: invitedUser.userId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(409);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("CONFLICT");
    });

    it("should reject duplicate active invite", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .post(ROUTES.createInvite())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({
          invited_user_id: invitedUser.userId,
          expires_in_days: 2,
        });

      expect(res.status).toBe(409);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("CONFLICT");
    });
  });

  describe("Get Received Invites", () => {
    it("should get received invites for authenticated user", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .get(`${ROUTES.receivedInvites()}?page=1&limit=10`)
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Received invites retrieved successfully");

      expect(Array.isArray(res.body.data.invites)).toBe(true);
      expect(res.body.data.invites.length).toBe(1);

      expect(res.body.data.invites[0].company_id).toBe(company.companyId);
      expect(res.body.data.invites[0].invited_user_id).toBe(invitedUser.userId);
      expect(res.body.data.invites[0].invite_company).toBeDefined();

      expect(res.body.data.pagination.page).toBe(1);
      expect(res.body.data.pagination.limit).toBe(10);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should reject invalid received invite query", async () => {
      const invitedUser = await createAuthenticatedUser();

      const res = await request(app)
        .get(`${ROUTES.receivedInvites()}?page=abc&limit=xyz`)
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("should get single received invite", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .get(ROUTES.receivedInvite(invite.inviteId))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Invite retrieved successfully");

      expect(res.body.data.id).toBe(invite.inviteId);
      expect(res.body.data.company_id).toBe(company.companyId);
      expect(res.body.data.invited_user_id).toBe(invitedUser.userId);
      expect(res.body.data.invite_company).toBeDefined();
    });

    it("should return 404 when another user tries to get received invite", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const anotherUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .get(ROUTES.receivedInvite(invite.inviteId))
        .set("Authorization", `Bearer ${anotherUser.accessToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });
  });

  describe("Get Sent Invites", () => {
    it("should get sent invites for company owner", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .get(`${ROUTES.sentInvites()}?page=1&limit=10`)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Sent invites retrieved successfully");

      expect(Array.isArray(res.body.data.invites)).toBe(true);
      expect(res.body.data.invites.length).toBe(1);

      expect(res.body.data.invites[0].company_id).toBe(company.companyId);
      expect(res.body.data.invites[0].created_by).toBe(owner.userId);
      expect(res.body.data.invites[0].invited_user_id).toBe(invitedUser.userId);
      expect(res.body.data.invites[0].user_invited).toBeDefined();

      expect(res.body.data.pagination.page).toBe(1);
      expect(res.body.data.pagination.limit).toBe(10);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should reject sent invites without company header", async () => {
      const owner = await createAuthenticatedUser();

      const res = await request(app)
        .get(ROUTES.sentInvites())
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.message).toBe("Invalid company or user identifier");
    });

    it("should reject invalid sent invite query", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .get(`${ROUTES.sentInvites()}?page=abc&limit=xyz`)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("should get single sent invite", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .get(ROUTES.sentInvite(invite.inviteId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Invite retrieved successfully");

      expect(res.body.data.id).toBe(invite.inviteId);
      expect(res.body.data.company_id).toBe(company.companyId);
      expect(res.body.data.created_by).toBe(owner.userId);
      expect(res.body.data.user_invited).toBeDefined();
    });

    it("should return 404 when sent invite does not belong to creator", async () => {
      const owner = await createAuthenticatedUser();
      const anotherOwner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();

      const ownerCompany = await createCompany(owner.accessToken);
      const anotherCompany = await createCompany(anotherOwner.accessToken);

      const invite = await createInvite(
        ownerCompany.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .get(ROUTES.sentInvite(invite.inviteId))
        .set("Authorization", `Bearer ${anotherOwner.accessToken}`)
        .set(COMPANY_ID_HEADER, anotherCompany.companyId);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });
  });

  describe("Delete Invite", () => {
    it("should soft delete invite by creator", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .delete(ROUTES.deleteInvite(invite.inviteId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Invite deleted successfully");

      expect(res.body.data.id).toBe(invite.inviteId);
      expect(res.body.data.deleted_at).not.toBeNull();

      const dbInvite = await prisma.companyInvite.findUnique({
        where: {
          id: invite.inviteId,
        },
      });

      expect(dbInvite?.deleted_at).not.toBeNull();
    });

    it("should reject delete invite without company header", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .delete(ROUTES.deleteInvite(invite.inviteId))
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
       expect(res.body.error.message).toBe("Invalid company or user identifier");
    });

    it("should return 404 when deleting unknown invite", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const fakeInviteId = "00000000-0000-0000-0000-000000000000";

      const res = await request(app)
        .delete(ROUTES.deleteInvite(fakeInviteId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });

    it("should not show deleted invite in received invites", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const deleteRes = await request(app)
        .delete(ROUTES.deleteInvite(invite.inviteId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(deleteRes.status).toBe(200);

      const res = await request(app)
        .get(ROUTES.receivedInvites())
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.invites.length).toBe(0);
    });
  });

  describe("Accept Invite", () => {
    it("should accept invite by invited user", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .patch(ROUTES.acceptInvite(invite.inviteCode))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe(
        "Invite accepted successfully. Wait for admin to verify and assign you a role"
      );

      expect(res.body.data.id).toBe(invite.inviteId);
      expect(res.body.data.is_redeemed).toBe(true);

      const dbInvite = await prisma.companyInvite.findUnique({
        where: {
          id: invite.inviteId,
        },
      });

      expect(dbInvite?.is_redeemed).toBe(true);
    });

    it("should reject accepting same invite twice", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const firstRes = await request(app)
        .patch(ROUTES.acceptInvite(invite.inviteCode))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(firstRes.status).toBe(200);

      const secondRes = await request(app)
        .patch(ROUTES.acceptInvite(invite.inviteCode))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(secondRes.status).toBe(409);
      expect(secondRes.body.success).toBe(false);
      expect(secondRes.body.error.code).toBe("CONFLICT");
    });

    it("should reject accepting invite by wrong user", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const wrongUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      const res = await request(app)
        .patch(ROUTES.acceptInvite(invite.inviteCode))
        .set("Authorization", `Bearer ${wrongUser.accessToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });

    it("should reject invalid invite code", async () => {
      const invitedUser = await createAuthenticatedUser();

      const res = await request(app)
        .patch(ROUTES.acceptInvite("BAD"))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });

    it("should reject expired invite", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      await prisma.companyInvite.update({
        where: {
          id: invite.inviteId,
        },
        data: {
          expired_at: new Date(Date.now() - 60 * 1000),
        },
      });

      const res = await request(app)
        .patch(ROUTES.acceptInvite(invite.inviteCode))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });

    it("should reject accepting deleted invite", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const invite = await createInvite(
        company.companyId,
        owner.accessToken,
        invitedUser.userId
      );

      await prisma.companyInvite.update({
        where: {
          id: invite.inviteId,
        },
        data: {
          deleted_at: new Date(),
        },
      });

      const res = await request(app)
        .patch(ROUTES.acceptInvite(invite.inviteCode))
        .set("Authorization", `Bearer ${invitedUser.accessToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });
  });
});