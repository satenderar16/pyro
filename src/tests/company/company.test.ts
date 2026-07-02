import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";
import { userType } from "../../../prisma/generated";
import { CreateCompanyInput } from "../../schema/company/company.schema";

const COMPANY_BASE = "/api/company";

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

const uniqueId = () => `${Date.now()}_${Math.floor(Math.random() * 100000)}`;

const createUserPayload = (): UserPayload => {
  const id = uniqueId();

  return {
    name: "Test User",
    username: `testuser_${id}`,
    email: `test_${id}@example.com`,
    password: "password123",
  };
};

const createCompanyPayload = (): CreateCompanyInput => {
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
  accessToken: string,
  override: Partial<CreateCompanyInput> = {}
) => {
  const payload = {
    ...createCompanyPayload(),
    ...override,
  };

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
    res,
    payload,
    companyId,
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
    throw new Error("Admin role not found for company");
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

describe("Company API", () => {
  beforeEach(async () => {
   
     await prisma.companyInvite.deleteMany();
    await prisma.companyUser.deleteMany();
    await prisma.companyRole.deleteMany();
    await prisma.items.deleteMany();
    await prisma.company.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.users.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("Create Company", () => {
    it("should create company for authenticated user", async () => {
      const owner = await createAuthenticatedUser();
      const payload = createCompanyPayload();

      const res = await request(app)
        .post(COMPANY_BASE)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .send(payload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Company created successfully");

      expect(res.body.data.company.name).toBe(payload.name);
      expect(res.body.data.company.contact).toBe(payload.contact);
      expect(res.body.data.company.address).toBe(payload.address);

      expect(res.body.data.user_type).toBe(userType.OWNER);
      expect(res.body.data.role.name).toBe("Owner");

      const companyId: unknown = res.body.data.company.id;

      if (typeof companyId !== "string") {
        throw new Error("Company id was not returned");
      }

      const roles = await prisma.companyRole.findMany({
        where: {
          company_id: companyId,
        },
      });

      expect(roles.length).toBe(2);

      const ownerRole = roles.find((role) => role.user_type === userType.OWNER);
      const adminRole = roles.find((role) => role.user_type === userType.ADMIN);

      expect(ownerRole).toBeDefined();
      expect(adminRole).toBeDefined();
    });

    it("should reject company creation without authentication", async () => {
      const payload = createCompanyPayload();

      const res = await request(app)
        .post(COMPANY_BASE)
        .send(payload);

      expect(res.status).toBe(401);
    });

    it("should reject invalid company payload", async () => {
      const owner = await createAuthenticatedUser();

      const res = await request(app)
        .post(COMPANY_BASE)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .send({
          name: "",
          contact: "",
          address: "",
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });
  });

  describe("Get Company", () => {
    it("should get company by id", async () => {
      const owner = await createAuthenticatedUser();
      const { companyId, payload } = await createCompany(owner.accessToken);

      const res = await request(app)
        .get(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Company retrieved successfully");

      expect(res.body.data.id).toBe(companyId);
      expect(res.body.data.name).toBe(payload.name);
      expect(res.body.data.deleted_at).toBeNull();
    });

    it("should return 404 for unknown company id", async () => {
      const owner = await createAuthenticatedUser();

      const fakeCompanyId = "00000000-0000-0000-0000-000000000000";

      const res = await request(app)
        .get(`${COMPANY_BASE}/${fakeCompanyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });
  });

  describe("Get Joined Companies", () => {
    it("should get joined companies with pagination", async () => {
      const owner = await createAuthenticatedUser();

      await createCompany(owner.accessToken);
      await createCompany(owner.accessToken);

      const res = await request(app)
        .get(`${COMPANY_BASE}/joined?page=1&limit=10`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Companies retrieved successfully");

      expect(Array.isArray(res.body.data.companies)).toBe(true);
      expect(res.body.data.companies.length).toBe(2);

      expect(res.body.data.pagination.page).toBe(1);
      expect(res.body.data.pagination.limit).toBe(10);
      expect(res.body.data.pagination.total_count).toBe(2);
      expect(res.body.data.pagination.total_pages).toBe(1);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should reject invalid pagination query", async () => {
      const owner = await createAuthenticatedUser();

      const res = await request(app)
        .get(`${COMPANY_BASE}/joined?page=abc&limit=xyz`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });
  });

  describe("Update Company", () => {
    it("should update company as owner", async () => {
      const owner = await createAuthenticatedUser();
      const { companyId } = await createCompany(owner.accessToken);

      const res = await request(app)
        .patch(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .send({
          name: "Updated Company Name",
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Company updated successfully");

      expect(res.body.data.id).toBe(companyId);
      expect(res.body.data.name).toBe("Updated Company Name");

      const dbCompany = await prisma.company.findUnique({
        where: {
          id: companyId,
        },
      });

      expect(dbCompany?.name).toBe("Updated Company Name");
    });

    it("should reject update when user is not part of company", async () => {
      const owner = await createAuthenticatedUser();
      const anotherUser = await createAuthenticatedUser();

      const { companyId } = await createCompany(owner.accessToken);

      const res = await request(app)
        .patch(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${anotherUser.accessToken}`)
        .send({
          name: "Hacked Company Name",
        });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("FORBIDDEN");
    });

    it("should reject update when user is admin but not owner", async () => {
      const owner = await createAuthenticatedUser();
      const adminUser = await createAuthenticatedUser();

      const { companyId } = await createCompany(owner.accessToken);

      await addUserToCompanyAsAdmin(
        companyId,
        adminUser.userId,
        owner.userId
      );

      const res = await request(app)
        .patch(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${adminUser.accessToken}`)
        .send({
          name: "Admin Updated Name",
        });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("FORBIDDEN");
    });

    it("should reject empty update body", async () => {
      const owner = await createAuthenticatedUser();
      const { companyId } = await createCompany(owner.accessToken);

      const res = await request(app)
        .patch(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`)
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("VALIDATION_ERROR");
    });
  });

  describe("Delete Company", () => {
    it("should soft delete company as owner", async () => {
      const owner = await createAuthenticatedUser();
      const { companyId } = await createCompany(owner.accessToken);

      const res = await request(app)
        .delete(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Company deleted successfully");

      expect(res.body.data.id).toBe(companyId);
      expect(res.body.data.deleted_at).not.toBeNull();

      const dbCompany = await prisma.company.findUnique({
        where: {
          id: companyId,
        },
      });

      expect(dbCompany?.deleted_at).not.toBeNull();
    });

    it("should return 404 when getting deleted company", async () => {
      const owner = await createAuthenticatedUser();
      const { companyId } = await createCompany(owner.accessToken);

      await request(app)
        .delete(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      const res = await request(app)
        .get(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${owner.accessToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });

    it("should reject delete when user is not part of company", async () => {
      const owner = await createAuthenticatedUser();
      const anotherUser = await createAuthenticatedUser();

      const { companyId } = await createCompany(owner.accessToken);

      const res = await request(app)
        .delete(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${anotherUser.accessToken}`);

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("FORBIDDEN");
    });

    it("should reject delete when user is admin but not owner", async () => {
      const owner = await createAuthenticatedUser();
      const adminUser = await createAuthenticatedUser();

      const { companyId } = await createCompany(owner.accessToken);

      await addUserToCompanyAsAdmin(
        companyId,
        adminUser.userId,
        owner.userId
      );

      const res = await request(app)
        .delete(`${COMPANY_BASE}/${companyId}`)
        .set("Authorization", `Bearer ${adminUser.accessToken}`);

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe("FORBIDDEN");
    });
  });
});