import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";

const CATEGORIES_BASE = "/api/catelog/category";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
  list: () => CATEGORIES_BASE,
  one: (id: string) => `${CATEGORIES_BASE}/${id}`,
  create: () => CATEGORIES_BASE,
  update: (id: string) => `${CATEGORIES_BASE}/${id}`,
  delete: (id: string) => `${CATEGORIES_BASE}/${id}`,
  items: (catId: string) => `${CATEGORIES_BASE}/${catId}/items`, 
};

type AuthFixture = { accessToken: string; userId: string; };
type CompanyFixture = { companyId: string; };

const uniqueId = () => `${Date.now()}_${Math.floor(Math.random() * 100000)}`;

const createAuthenticatedUser = async (): Promise<AuthFixture> => {
  const payload = {
    name: "Test User",
    username: `testuser_${uniqueId()}`,
    email: `test_${uniqueId()}@example.com`,
    password: "password123",
  };

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
  return { accessToken, userId: dbUser.id };
};

const createCompany = async (accessToken: string): Promise<CompanyFixture> => {
  const payload = {
    name: `Test Company ${uniqueId()}`,
    contact: `980000${Math.floor(Math.random() * 10000)}`,
    address: "Kathmandu, Nepal",
  };

  const res = await request(app)
    .post("/api/company")
    .set("Authorization", `Bearer ${accessToken}`)
    .send(payload);

  expect(res.status).toBe(201);
  const companyId = res.body.data?.company?.id;
  if (typeof companyId !== "string") throw new Error("Missing company id");
  return { companyId };
};

const createCategoryInDB = async (companyId: string, userId: string, name: string, parentId: string | null = null) => {
  return prisma.categories.create({
    data: {
      name,
      company_id: companyId,
      parent_id: parentId,
      created_by: userId,
      updated_by: userId,
    },
  });
};


const createItemInDB = async (catId: string, companyId: string, userId: string) => {
  return prisma.items.create({
    data: {
      name: `Test Item ${uniqueId()}`,
      cat_id: catId,
      company_id: companyId,
      created_by: userId,
      updated_by: userId,
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
  if (res.body?.success !== undefined) expect(res.body.success).toBe(false);
  if (errorCode) {
    const code = res.body?.error?.code ?? res.body?.code;
    expect(code).toBe(errorCode);
  }
  if (messageContains) {
    const msg = res.body?.error?.message ?? res.body?.message ?? "";
    expect(msg).toContain(messageContains);
  }
};

describe("Category API", () => {
  beforeEach(async () => {
    await prisma.options.deleteMany();
    await prisma.items.deleteMany();
    await prisma.categories.deleteMany();
    await prisma.companyInvite.deleteMany();
    await prisma.companyUser.deleteMany();
    await prisma.companyRole.deleteMany();
    await prisma.company.deleteMany();
    await prisma.refreshToken.deleteMany();
    await prisma.users.deleteMany();
  });

  afterAll(async () => {
    try { await prisma.$disconnect(); } catch (e) {}
  });

  describe("Get One", () => {
    it("should return a category successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, userId, "Electronics");

      const res = await request(app)
        .get(ROUTES.one(cat.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe(cat.id);
      expect(res.body.data.name).toBe("Electronics");
    });

    it("should return 404 if category not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .get(ROUTES.one("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });

    it("should reject access to another company's category", async () => {
      const user1 = await createAuthenticatedUser();
      const user2 = await createAuthenticatedUser();
      const company1 = await createCompany(user1.accessToken);
      await createCompany(user2.accessToken);

      const cat = await createCategoryInDB(company1.companyId, user1.userId, "SecretCat");

      const res = await request(app)
        .get(ROUTES.one(cat.id))
        .set("Authorization", `Bearer ${user2.accessToken}`)
        .set(COMPANY_ID_HEADER, company1.companyId);

      expectErrorResponse(res, 403, "FORBIDDEN");
    });

    it("should reject invalid UUID", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .get(ROUTES.one("invalid-uuid"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });
  });

  describe("Get Many", () => {
    it("should return paginated categories successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      await createCategoryInDB(companyId, userId, "Cat 1");
      await createCategoryInDB(companyId, userId, "Cat 2");

      const res = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data.categories)).toBe(true);
      expect(res.body.data.categories.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should respect custom page & limit", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      for (let i = 0; i < 5; i++) await createCategoryInDB(companyId, userId, `Paginated Cat ${i}`);

      const res = await request(app)
        .get(`${ROUTES.list()}?page=1&limit=2`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.data.categories.length).toBe(2);
      expect(res.body.data.pagination.has_next).toBe(true);
    });

    it("should reject invalid query parameters", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .get(`${ROUTES.list()}?page=abc&limit=xyz`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });
  });

  describe("Create Category", () => {
    it("should create a root category successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "New Category" });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("New Category");
      expect(res.body.data.parent_id).toBeNull();
    });

    it("should create a nested category successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const parent = await createCategoryInDB(companyId, userId, "Parent");

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "Child Category", parent_id: parent.id });

      expect(res.status).toBe(201);
      expect(res.body.data.parent_id).toBe(parent.id);
    });

    it("should reject duplicate category names (root)", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      await createCategoryInDB(companyId, userId, "DuplicateRoot");

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "DuplicateRoot" });

      expectErrorResponse(res, 409, "CONFLICT", "Category already exists");
    });

    it("should reject duplicate category names (nested)", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const parent = await createCategoryInDB(companyId, userId, "Parent");
      await createCategoryInDB(companyId, userId, "DuplicateChild", parent.id);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "DuplicateChild", parent_id: parent.id });

      expectErrorResponse(res, 409, "CONFLICT", "Category already exists");
    });

    it("should reject subcategory if parent already has items", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const parent = await createCategoryInDB(companyId, userId, "BlockedParent");
      await createItemInDB(parent.id, companyId, userId);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "ShouldFail", parent_id: parent.id });

      expectErrorResponse(res, 409, "CONFLICT", "Cannot create subcategory under a category that already contains items.");
    });

    it("should reject invalid body", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "" });

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });
  });

  describe("Update Category", () => {
    it("should update category name successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, userId, "OldName");

      const res = await request(app)
        .patch(ROUTES.update(cat.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "NewName" });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("NewName");
    });

    it("should return 404 if category not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .patch(ROUTES.update("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "Updated" });

      expectErrorResponse(res, 404, "NOT_FOUND");
    });

    it("should reject updating another company's category", async () => {
      const user1 = await createAuthenticatedUser();
      const user2 = await createAuthenticatedUser();
      const company1 = await createCompany(user1.accessToken);
      await createCompany(user2.accessToken);

      const cat = await createCategoryInDB(company1.companyId, user1.userId, "Owned");

      const res = await request(app)
        .patch(ROUTES.update(cat.id))
        .set("Authorization", `Bearer ${user2.accessToken}`)
        .set(COMPANY_ID_HEADER, company1.companyId)
        .send({ name: "Hacked" });

      expectErrorResponse(res, 403, "FORBIDDEN");
    });
  });

  describe("Delete Category", () => {
    it("should soft delete category successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, userId, "ToDelete");

      const res = await request(app)
        .delete(ROUTES.delete(cat.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const dbCat = await prisma.categories.findUnique({ where: { id: cat.id } });
      expect(dbCat?.deleted_at).not.toBeNull();
    });

    it("should exclude soft-deleted categories from list", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      await createCategoryInDB(companyId, userId, "Visible");
      const toDelete = await createCategoryInDB(companyId, userId, "Hidden");

      await request(app)
        .delete(ROUTES.delete(toDelete.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      const listRes = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(listRes.status).toBe(200);
      expect(listRes.body.data.categories.every((c: any) => c.name !== "Hidden")).toBe(true);
    });

    it("should return 404 if category not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .delete(ROUTES.delete("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });

  // ✅ NEW TEST SUITE: Get Many Items
  describe("Get Many Items", () => {
    it("should return paginated items for a category successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, userId, "Snacks");
      await createItemInDB(cat.id, companyId, userId);
      await createItemInDB(cat.id, companyId, userId);

      const res = await request(app)
        .get(ROUTES.items(cat.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data.items)).toBe(true);
      expect(res.body.data.items.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should respect custom page & limit for items", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, userId, "Beverages");
      for (let i = 0; i < 5; i++) await createItemInDB(cat.id, companyId, userId);

      const res = await request(app)
        .get(`${ROUTES.items(cat.id)}?page=1&limit=2`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.data.items.length).toBe(2);
      expect(res.body.data.pagination.has_next).toBe(true);
    });

    it("should return 404 if category not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .get(ROUTES.items("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });

    it("should reject invalid query parameters", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, userId, "TestCat");

      const res = await request(app)
        .get(`${ROUTES.items(cat.id)}?page=abc&limit=xyz`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });

    it("should reject access to another company's category items", async () => {
      const user1 = await createAuthenticatedUser();
      const user2 = await createAuthenticatedUser();
      const company1 = await createCompany(user1.accessToken);
      await createCompany(user2.accessToken);

      const cat = await createCategoryInDB(company1.companyId, user1.userId, "Food");
      await createItemInDB(cat.id, company1.companyId, user1.userId);

      const res = await request(app)
        .get(ROUTES.items(cat.id))
        .set("Authorization", `Bearer ${user2.accessToken}`)
        .set(COMPANY_ID_HEADER, company1.companyId);

      // Controller checks category existence per company -> returns 404
      expectErrorResponse(res, 403, "FORBIDDEN");
    });
  });
});