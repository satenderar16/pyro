import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";
import { userType } from "../../../prisma/generated";
// Import ALL_PERMISSION_KEYS to ensure dynamic permission seeding
import { getRolePermissions, Permission, ALL_PERMISSION_KEYS } from "../../utils/permissions"; 

const COMPANY_ROLE_BASE = "/api/company/roles";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
  list: () => COMPANY_ROLE_BASE,
  one: (roleId: string) => `${COMPANY_ROLE_BASE}/${roleId}`,
  create: () => COMPANY_ROLE_BASE,
  update: (roleId: string) => `${COMPANY_ROLE_BASE}/${roleId}`,
  delete: (roleId: string) => `${COMPANY_ROLE_BASE}/${roleId}`,
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

const createRole = async (
  companyId: string,
  accessToken: string,
  name: string,
  user_type: userType
): Promise<{ id: string }> => {
  // Fetch all permissions to filter by userType
  const allPermissions: Permission[] = await prisma.permission.findMany();
  const { ownerPermissions, adminPermissions, staffPermissions } = getRolePermissions(allPermissions);

  let allowedKeys: string[] = [];
  switch (user_type) {
    case "OWNER": allowedKeys = ownerPermissions.map(p => p.permission_key); break;
    case "ADMIN": allowedKeys = adminPermissions.map(p => p.permission_key); break;
    case "STAFF": allowedKeys = staffPermissions.map(p => p.permission_key); break;
  }

  // Map keys to IDs for the API request
  const permissionIds = allowedKeys
    .map(key => allPermissions.find(p => p.permission_key === key)?.id)
    .filter((id): id is number => id !== undefined);

  const res = await request(app)
    .post(ROUTES.create())
    .set("Authorization", `Bearer ${accessToken}`)
    .set(COMPANY_ID_HEADER, companyId)
    .send({ name, user_type, permissionIds });

  expect(res.status).toBe(201);
  return { id: res.body.data.id };
};

const addMemberWithRole = async (
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

// ✅ Robust error assertion (handles both controller & middleware responses)
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

describe("CompanyRole API", () => {
  beforeEach(async () => {
    // Ensure DB is connected before each test to avoid pg deprecation warnings
    await prisma.$connect();
    
    await setupBasePermissions();
    
    // Sequential deletion to prevent foreign key race conditions
    await prisma.rolePermission.deleteMany();
    await prisma.companyInvite.deleteMany();
    await prisma.companyUser.deleteMany();
    await prisma.companyRole.deleteMany();
    await prisma.company.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.users.deleteMany();
  });

  afterAll(async () => {
    try {
      await prisma.$disconnect();
    } catch (e) {
      // Ignore disconnect errors during test teardown
    }
  });

  describe("Create Role", () => {
    it("should create ADMIN role with auto-assigned permissions", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ name: "Test Admin", user_type: userType.ADMIN });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user_type).toBe(userType.ADMIN);
    });

    it("should reject creating OWNER role", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ name: "Test Owner", user_type: userType.OWNER });

      expectErrorResponse(res, 403, "FORBIDDEN", "Creating an owner role is not allowed");
    });

    it("should reject invalid body", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ name: "", user_type: "INVALID" });

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });

    it("should reject duplicate role name", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      await createRole(company.companyId, owner.accessToken, "UniqueRole", userType.STAFF);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ name: "UniqueRole", user_type: userType.STAFF });

      expectErrorResponse(res, 409, "CONFLICT", "Role already exists");
    });
  });

  describe("Get List", () => {
    it("should return paginated roles successfully", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      
      // Note: createCompany often seeds default system roles.
      // We create 2 more, so total >= 2 is expected.
      await createRole(company.companyId, owner.accessToken, "Role 1", userType.STAFF);
      await createRole(company.companyId, owner.accessToken, "Role 2", userType.ADMIN);

      const res = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.roles.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.pagination.has_next).toBe(false);
    });
  });

  describe("Get One", () => {
    it("should return role with permissions successfully", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await createRole(company.companyId, owner.accessToken, "TestRole", userType.STAFF);

      const res = await request(app)
        .get(ROUTES.one(role.id))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user_type).toBe(userType.STAFF);
      expect(Array.isArray(res.body.data.permissions)).toBe(true);
    });

    it("should return 404 if role not found", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      const res = await request(app)
        .get(ROUTES.one("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });

  describe("Update Role", () => {
    it("should update role name and active state successfully", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await createRole(company.companyId, owner.accessToken, "OldName", userType.STAFF);

      const res = await request(app)
        .put(ROUTES.update(role.id))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ name: "NewName", active: false });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("NewName");
      expect(res.body.data.active).toBe(false);
    });

    it("should reject updating to OWNER type", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await createRole(company.companyId, owner.accessToken, "TestRole", userType.STAFF);

      const res = await request(app)
        .put(ROUTES.update(role.id))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ user_type: userType.OWNER });

      expectErrorResponse(res, 403, "FORBIDDEN", "Cannot modify roles to owner");
    });

    it("should reject Admin modifying non-STAFF roles", async () => {
      const owner = await createAuthenticatedUser();
      const adminUser = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);

      // Admin role gets auto-assigned permissions via getRolePermissions
      const adminRole = await createRole(company.companyId, owner.accessToken, "AdminRole", userType.ADMIN);
      await addMemberWithRole(company.companyId, adminUser.userId, adminRole.id, userType.ADMIN, owner.userId);

      const staffRole = await createRole(company.companyId, owner.accessToken, "StaffRole", userType.STAFF);

      const res = await request(app)
        .put(ROUTES.update(staffRole.id))
        .set("Authorization", `Bearer ${adminUser.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId)
        .send({ user_type: userType.ADMIN });

      expectErrorResponse(res, 403, "FORBIDDEN", "Admin can only modify STAFF roles");
    });
  });

  describe("Delete Role", () => {
    it("should soft delete role successfully", async () => {
      const owner = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await createRole(company.companyId, owner.accessToken, "ToDelete", userType.STAFF);

      const res = await request(app)
        .delete(ROUTES.delete(role.id))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const dbRole = await prisma.companyRole.findUnique({ where: { id: role.id } });
      expect(dbRole?.deleted_at).not.toBeNull();
    });

    it("should reject deleting role assigned to users", async () => {
      const owner = await createAuthenticatedUser();
      const member = await createAuthenticatedUser();
      const company = await createCompany(owner.accessToken);
      const role = await createRole(company.companyId, owner.accessToken, "AssignedRole", userType.STAFF);

      await addMemberWithRole(company.companyId, member.userId, role.id, userType.STAFF, owner.userId);

      const res = await request(app)
        .delete(ROUTES.delete(role.id))
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .set(COMPANY_ID_HEADER, company.companyId);

      expectErrorResponse(res, 400, "VALIDATION_ERROR", "Role cannot be deleted because it is assigned to users");
    });
  });
});