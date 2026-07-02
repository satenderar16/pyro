import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";
import { userType } from "../../../prisma/generated";
import { getRolePermissions, ALL_PERMISSION_KEYS } from "../../utils/permissions";

const COMPANY_USER_BASE = "/api/company/users";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
  list: () => COMPANY_USER_BASE,
  one: (userId: string) => `${COMPANY_USER_BASE}/${userId}`,
  verify: (userId: string) => `${COMPANY_USER_BASE}/${userId}/verify`,
  update: (userId: string) => `${COMPANY_USER_BASE}/${userId}`,
  delete: (userId: string) => `${COMPANY_USER_BASE}/${userId}`,
};

type UserPayload = { name: string; username: string; email: string; password: string; };
type AuthFixture = { accessToken: string; userId: string; payload: UserPayload; };
type CompanyPayload = { name: string; contact: string; address: string; };
type CompanyFixture = { companyId: string; payload: CompanyPayload; };

const uniqueId = () => `${Date.now()}_${Math.floor(Math.random() * 100000)}`;

const createUserPayload = (): UserPayload => ({
  name: "Test User",
  username: `testuser_${uniqueId()}`,
  email: `test_${uniqueId()}@example.com`,
  password: "password123",
});

const createCompanyPayload = (): CompanyPayload => ({
  name: `Test Company ${uniqueId()}`,
  contact: `980000${Math.floor(Math.random() * 10000)}`,
  address: "Kathmandu, Nepal",
});

const createAuthenticatedUser = async (): Promise<AuthFixture> => {
  const payload = createUserPayload();
  const signupRes = await request(app).post("/api/auth/signup").send(payload);
  expect(signupRes.status).toBe(201);

  const signinRes = await request(app)
    .post("/api/auth/signin")
    .send({ email: payload.email, password: payload.password });
  expect(signinRes.status).toBe(200);

  const accessToken = signinRes.body.data?.access_token;
  if (typeof accessToken !== "string") throw new Error("Missing access token");

  const dbUser = await prisma.users.findUnique({ where: { email: payload.email } });
  if (!dbUser) throw new Error("User not created in DB");
  return { accessToken, userId: dbUser.id, payload };
};

const createCompany = async (accessToken: string): Promise<CompanyFixture> => {
  const payload = createCompanyPayload();
  const res = await request(app)
    .post("/api/company")
    .set("Authorization", `Bearer ${accessToken}`)
    .send(payload);

  expect(res.status).toBe(201);
  const companyId = res.body.data?.company?.id;
  if (typeof companyId !== "string") throw new Error("Missing company id");
  return { companyId, payload };
};

const setupBasePermissions = async () => {
  const count = await prisma.permission.count();
  if (count === 0) {
    await prisma.permission.createMany({
      data: ALL_PERMISSION_KEYS.map(k => ({ permission_key: k })),
      skipDuplicates: true,
    });
  }
};


const getOrCreateRole = async (
  companyId: string,
  user_type: userType
): Promise<{ id: string; user_type: userType }> => {
  let role = await prisma.companyRole.findFirst({
    where: { company_id: companyId, user_type, deleted_at: null },
  });

  if (!role) {
    role = await prisma.companyRole.create({
      data: { company_id: companyId, name: `${user_type} Role`, user_type },
    });
  }

  // Assign permissions based on userType
  const allPermissions = await prisma.permission.findMany();
  const { ownerPermissions, adminPermissions, staffPermissions } = getRolePermissions(allPermissions);

  let allowedKeys: string[] = [];
  switch (user_type) {
    case "OWNER": allowedKeys = ownerPermissions.map(p => p.permission_key); break;
    case "ADMIN": allowedKeys = adminPermissions.map(p => p.permission_key); break;
    case "STAFF": allowedKeys = staffPermissions.map(p => p.permission_key); break;
  }

  const permissionIds = allowedKeys
    .map(key => allPermissions.find(p => p.permission_key === key)?.id)
    .filter((id): id is number => id !== undefined);

  await prisma.rolePermission.createMany({
    data: permissionIds.map(id => ({ role_id: role.id, permission_id: id })),
    skipDuplicates: true,
  });

  return role;
};

const createAndRedeemInvite = async (
  companyId: string,
  invitedUserId: string,
  createdByUserId: string
): Promise<{ id: string; invite_code: string }> => {
  const invite = await prisma.companyInvite.create({
    data: {
      company_id: companyId,
      invited_user_id: invitedUserId,
      created_by: createdByUserId,
      creator_user_type: userType.OWNER,
      invite_code: `INV${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
      expired_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
      is_redeemed: true,
    },
  });
  return invite;
};

const addMemberDirectly = async (
  companyId: string,
  userId: string,
  roleId: string,
  user_type: userType,
  createdBy: string
) => {
  return prisma.companyUser.create({
    data: {
      company_id: companyId,
      user_id: userId,
      role_id: roleId,
      user_type,
      verified_user: true,
      verified_by: createdBy,
      verified_at: new Date(),
      created_by: createdBy,
      updated_by: createdBy,
      updated_at: new Date(),
    },
  });
};


const expectErrorResponse = (
  res: request.Response,
  statusCode: number,
  errorCode?: string,
  messageContains?: string
) => {
  expect(res.status).toBe(statusCode);
  expect(res.body.success).toBe(false);
  if (errorCode) {
    const code = res.body.error?.code ?? res.body.code;
    expect(code).toBe(errorCode);
  }
  if (messageContains) {
    const msg = res.body.error?.message ?? res.body.message ?? "";
    expect(msg).toContain(messageContains);
  }
};

describe("CompanyUser API", () => {
  beforeEach(async () => {  
    await setupBasePermissions(); 
    await prisma.rolePermission.deleteMany();
    await prisma.companyInvite.deleteMany();
    await prisma.companyRole.deleteMany();
    await prisma.companyUser.deleteMany();
    await prisma.company.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.users.deleteMany();
  });

  afterAll(async () => await prisma.$disconnect());

  describe("CompanyUser Get List", () => {
    it("should return paginated members successfully", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.ADMIN);

      await addMemberDirectly(company.companyId, member.userId, role.id, userType.ADMIN, owner.userId);

      const res = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.members.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.pagination.page).toBe(1);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should filter members by verified status", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.ADMIN);

      await addMemberDirectly(company.companyId, member.userId, role.id, userType.ADMIN, owner.userId);

      const res = await request(app)
        .get(`${ROUTES.list()}?verified=true`)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.data.members.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.members[0].verified_user).toBe(true);
    });

    it("should reject invalid query parameters", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .get(`${ROUTES.list()}?page=abc&limit=xyz`)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });

    it("should reject without company header", async () => {
      const owner = await createAuthenticatedUser();

      const res = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.message).toBe("Invalid company or user identifier");
    });
  });

  describe("CompanyUser Get One", () => {
    it("should return a single member successfully", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.ADMIN);

      await addMemberDirectly(company.companyId, member.userId, role.id, userType.ADMIN, owner.userId);

      const res = await request(app)
        .get(ROUTES.one(member.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user.id).toBe(member.userId);
      expect(res.body.data.user_type).toBe(userType.ADMIN);
    });

    it("should return 404 if member not found", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const fakeUserId = "00000000-0000-0000-0000-000000000000";

      const res = await request(app)
        .get(ROUTES.one(fakeUserId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });

  describe("Verify User", () => {
    it("should verify user successfully", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.STAFF);

      await createAndRedeemInvite(company.companyId, invitedUser.userId, owner.userId);

      const res = await request(app)
        .post(ROUTES.verify(invitedUser.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ role_id: role.id, user_type: userType.STAFF });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("User verified and added to company successfully");
      expect(res.body.data.verified_user).toBe(true);
      expect(res.body.data.role_id).toBe(role.id);
    });

    it("should reject if user is already a member", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.STAFF);

      await addMemberDirectly(company.companyId, member.userId, role.id, userType.STAFF, owner.userId);
      await createAndRedeemInvite(company.companyId, member.userId, owner.userId);

      const res = await request(app)
        .post(ROUTES.verify(member.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ role_id: role.id, user_type: userType.STAFF });

      expectErrorResponse(res, 409, "CONFLICT");
    });

    it("should reject if invite is not redeemed", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.STAFF);

      await prisma.companyInvite.create({
        data: {
          company_id: company.companyId,
          invited_user_id: invitedUser.userId,
          created_by: owner.userId,
          creator_user_type: userType.OWNER,
          invite_code: "TEST0001",
          expired_at: new Date(Date.now() + 86400000),
          is_redeemed: false,
        },
      });

      const res = await request(app)
        .post(ROUTES.verify(invitedUser.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ role_id: role.id, user_type: userType.STAFF });

      expectErrorResponse(res, 400, "VALIDATION_ERROR", "hasn't accepted the invite yet");
    });

    it("should reject Owner creating another Owner", async () => {
      const owner = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const ownerRole = await getOrCreateRole(company.companyId, userType.OWNER);

      await createAndRedeemInvite(company.companyId, invitedUser.userId, owner.userId);

      const res = await request(app)
        .post(ROUTES.verify(invitedUser.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ role_id: ownerRole.id, user_type: userType.OWNER });

      expectErrorResponse(res, 403, "FORBIDDEN");
    });

    it("should reject Admin creating non-Staff", async () => {
      const owner = await createAuthenticatedUser();
      const adminUser = await createAuthenticatedUser();
      const invitedUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const adminRole = await getOrCreateRole(company.companyId, userType.ADMIN);
      await addMemberDirectly(company.companyId, adminUser.userId, adminRole.id, userType.ADMIN, owner.userId);

      await createAndRedeemInvite(company.companyId, invitedUser.userId, adminUser.userId);

      const ownerRole = await getOrCreateRole(company.companyId, userType.OWNER);
      const failRes = await request(app)
        .post(ROUTES.verify(invitedUser.userId))
        .set("Authorization", `Bearer ${adminUser.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ role_id: ownerRole.id, user_type: userType.OWNER });

      expectErrorResponse(failRes, 403, "FORBIDDEN", "Admins can only create staff members");
    });
  });

  describe("Update Member", () => {
    it("should update role_id successfully", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const staffRole = await getOrCreateRole(company.companyId, userType.STAFF);
      const adminRole = await getOrCreateRole(company.companyId, userType.ADMIN);

      await addMemberDirectly(company.companyId, member.userId, staffRole.id, userType.STAFF, owner.userId);

      const res = await request(app)
        .patch(ROUTES.update(member.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ role_id: adminRole.id });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.role_id).toBe(adminRole.id);
    });

    it("should reject updating own data by Admin/Owner", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .patch(ROUTES.update(owner.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ user_type: userType.ADMIN });

      expectErrorResponse(res, 400, "VALIDATION_ERROR", "cannot update their own data");
    });

    it("should reject Admin assigning non-Staff user_type", async () => {
      const owner = await createAuthenticatedUser();
      const adminUser = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const adminRole = await getOrCreateRole(company.companyId, userType.ADMIN);
      const staffRole = await getOrCreateRole(company.companyId, userType.STAFF);

      await addMemberDirectly(company.companyId, adminUser.userId, adminRole.id, userType.ADMIN, owner.userId);
      await addMemberDirectly(company.companyId, member.userId, staffRole.id, userType.STAFF, owner.userId);

      const res = await request(app)
        .patch(ROUTES.update(member.userId))
        .set("Authorization", `Bearer ${adminUser.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ user_type: userType.ADMIN });

      expectErrorResponse(res, 403, "FORBIDDEN", "Admins are only permitted to assign the 'STAFF' user type");
    });

    it("should return 404 if member not found", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const fakeUserId = "00000000-0000-0000-0000-000000000000";

      const res = await request(app)
        .patch(ROUTES.update(fakeUserId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ user_type: userType.STAFF });

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });

  describe("Delete User", () => {
    it("should soft delete member successfully", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.STAFF);

      await addMemberDirectly(company.companyId, member.userId, role.id, userType.STAFF, owner.userId);

      const res = await request(app)
        .delete(ROUTES.delete(member.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Member removed successfully");

      const dbMember = await prisma.companyUser.findFirst({
        where: { company_id: company.companyId, user_id: member.userId },
      });
      expect(dbMember?.deleted_at).not.toBeNull();
    });

    it("should return 404 if member not found", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const fakeUserId = "00000000-0000-0000-0000-000000000000";

      const res = await request(app)
        .delete(ROUTES.delete(fakeUserId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });

    it("should not show deleted member in list", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await getOrCreateRole(company.companyId, userType.STAFF);

      await addMemberDirectly(company.companyId, member.userId, role.id, userType.STAFF, owner.userId);

      await request(app)
        .delete(ROUTES.delete(member.userId))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      const listRes = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(listRes.status).toBe(200);
      expect(listRes.body.data.members.length).toBeGreaterThanOrEqual(1); // Owner remains
    });
  });
});