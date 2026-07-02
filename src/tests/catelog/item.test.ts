import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";
import { optionType, currencyType } from "../../../prisma/generated/client";

const ITEMS_BASE = "/api/catelog/item";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
  list: () => ITEMS_BASE,
  one: (id: string) => `${ITEMS_BASE}/${id}`,
  options: (id: string) => `${ITEMS_BASE}/${id}/options`,
  create: () => ITEMS_BASE,
  update: (id: string) => `${ITEMS_BASE}/${id}`,
  delete: (id: string) => `${ITEMS_BASE}/${id}`,
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

// 🔧 DB Helpers (FK-safe & schema-compliant)
const createUnitClassInDB = async () => {
  return prisma.unitClass.create({
    data: { name: "WEIGHT", base_unit_name: "gram", base_unit_symbol: "g" },
  });
};

const createUnitInDB = async (classId: string) => {
  return prisma.units.create({
    data: { class_id: classId, name: "gram", symbol: "g", to_base_factor: 1 },
  });
};

const createCategoryInDB = async (companyId: string, userId: string, name: string, parentId: string | null = null) => {
  return prisma.categories.create({
    data: { name, company_id: companyId, parent_id: parentId, created_by: userId, updated_by: userId },
  });
};

// ✅ Updated: Accepts unitId to satisfy FK constraints
const createItemInDB = async (catId: string, companyId: string, userId: string, unitId: string) => {
  const item = await prisma.items.create({
    data: {
      name: `Test Item ${uniqueId()}`,
      cat_id: catId,
      company_id: companyId,
      created_by: userId,
      updated_by: userId,
    },
  });

  await prisma.options.create({
    data: {
      name: item.name,
      item_id: item.id,
      input_price:34,
      input_value:1,
      min_sell_quantity:1,
      min_sell_unit_id:unitId,
      unit_id: unitId,
      price_per_base_unit: 100,
      type: optionType.PACKAGE,
      currency: currencyType.INR,
      created_by: userId,
      updated_by: userId,
    },
  });

  return item;
};

// ✅ Robust error assertion
const expectErrorResponse = (
  res: request.Response,
  statusCode: number,
  errorCode?: string,
  messageContains?: string
) => {
  expect(res.status).toBe(statusCode);
  const isJson = res.headers["content-type"]?.includes("application/json");
  if (isJson) {
    expect(res.body.success).toBe(false);
    if (errorCode) expect(res.body.error?.code ?? res.body.code).toBe(errorCode);
    if (messageContains) expect(res.body.error?.message ?? res.body.message ?? "").toContain(messageContains);
  }
};

describe("Item API", () => {
  beforeEach(async () => {
    // 🔧 Strict FK cleanup order
    await prisma.orderOptions.deleteMany();
    await prisma.orders.deleteMany();
    await prisma.options.deleteMany();
    await prisma.items.deleteMany();
    await prisma.units.deleteMany();
    await prisma.unitClass.deleteMany();
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

  describe("Get Many Items", () => {
    it("should return paginated items successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "Drinks");

      await createItemInDB(cat.id, companyId, userId, unit.id);
      await createItemInDB(cat.id, companyId, userId, unit.id);

      const res = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);
        // console.log(res.body);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data.items)).toBe(true);
      expect(res.body.data.items.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should respect custom page & limit", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "Beverages");

      for (let i = 0; i < 5; i++) await createItemInDB(cat.id, companyId, userId, unit.id);

      const res = await request(app)
        .get(`${ROUTES.list()}?page=1&limit=2`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);
      
      expect(res.status).toBe(200);
      expect(res.body.data.items.length).toBe(2);
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

  describe("Get One Item", () => {
    it("should return an item with options successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "Food");
      const item = await createItemInDB(cat.id, companyId, userId, unit.id);

      const res = await request(app)
        .get(ROUTES.one(item.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe(item.id);
      expect(Array.isArray(res.body.data.options)).toBe(true);
    });

    it("should return 404 if item not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .get(ROUTES.one("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
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

  describe("Get Many Options", () => {
    it("should return paginated options for an item", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "Snacks");
      const item = await createItemInDB(cat.id, companyId, userId, unit.id);

      const res = await request(app)
        .get(ROUTES.options(item.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data.options)).toBe(true);
      expect(res.body.data.pagination.has_next).toBe(false);
    });

    it("should return 404 if item not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .get(ROUTES.options("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });

  describe("Create Item", () => {
    it("should create an item with default option successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "New Cat");

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({
          name: "New Item",
          cat_id: cat.id,
          price_per_base_unit: 150,
          unit_id: unit.id, // ✅ Now uses valid DB unit
          currency: currencyType.INR,
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.item.name).toBe("New Item");
      expect(res.body.data.option.name).toBe("New Item");
    });

    it("should reject invalid body", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const cat = await createCategoryInDB(companyId, (await createAuthenticatedUser()).userId, "Test");

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "", cat_id: cat.id });

      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });
  });

  describe("Update Item", () => {
    it("should update item name successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "UpdateCat");
      const item = await createItemInDB(cat.id, companyId, userId, unit.id);

      const res = await request(app)
        .patch(ROUTES.update(item.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "Renamed Item" });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Renamed Item");
    });

    it("should return 404 if item not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .patch(ROUTES.update("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "Updated" });

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });

  describe("Delete Item", () => {
    it("should soft delete item successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "DelCat");
      const item = await createItemInDB(cat.id, companyId, userId, unit.id);

      const res = await request(app)
        .delete(ROUTES.delete(item.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const dbItem = await prisma.items.findUnique({ where: { id: item.id } });
      expect(dbItem?.deleted_at).not.toBeNull();
    });

    it("should exclude soft-deleted items from list", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "ListCat");

      const visible = await createItemInDB(cat.id, companyId, userId, unit.id);
      const toDelete = await createItemInDB(cat.id, companyId, userId, unit.id);

      await request(app)
        .delete(ROUTES.delete(toDelete.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      const listRes = await request(app)
        .get(ROUTES.list())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(listRes.status).toBe(200);
      const ids = listRes.body.data.items.map((i: any) => i.id);
      expect(ids).toContain(visible.id);
      expect(ids).not.toContain(toDelete.id);
    });

    it("should return 404 if item not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .delete(ROUTES.delete("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expectErrorResponse(res, 404, "NOT_FOUND");
    });
  });
});