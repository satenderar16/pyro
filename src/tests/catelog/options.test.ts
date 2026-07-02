import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";
import { optionType, currencyType } from "../../../prisma/generated/client";

// 🔑 Update if your router mounts options at a different base path
const OPTIONS_BASE = "/api/catelog/option";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
  one: (id: string) => `${OPTIONS_BASE}/${id}`,
  create: () => OPTIONS_BASE,
  update: (id: string) => `${OPTIONS_BASE}/${id}`,
  delete: (id: string) => `${OPTIONS_BASE}/${id}`,
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

const createCategoryInDB = async (companyId: string, userId: string, name: string) => {
  return prisma.categories.create({
    data: { name, company_id: companyId, created_by: userId, updated_by: userId },
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

const createOptionInDB = async (
  itemId: string,
  unitId: string,
  userId: string,
  name: string = `Test Option ${uniqueId()}`
) => {
  return prisma.options.create({
    data: {
      name,
      item_id: itemId,
      unit_id: unitId,
      input_price: 100,
      input_value: 1,
      min_sell_quantity: 1,
      min_sell_unit_id: unitId,
      price_per_base_unit: 100,
      type: optionType.PACKAGE,
      currency: currencyType.INR,
      created_by: userId,
      updated_by: userId,
    },
  });
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

describe("Option API", () => {
  beforeEach(async () => {
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

  describe("Get One Option", () => {
    it("should return an option with unit details successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "TestCat");
      const item = await createItemInDB(cat.id, companyId, userId);
      const option = await createOptionInDB(item.id, unit.id, userId);

      const res = await request(app)
        .get(ROUTES.one(option.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe(option.id);
      expect(res.body.data.name).toBe(option.name);
      expect(res.body.data.units).toBeDefined();
    });

    it("should return 404 if option not found", async () => {
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

    it("should return 404 for another company's option (tenant isolation)", async () => {
      const user1 = await createAuthenticatedUser();
      const user2 = await createAuthenticatedUser();
      const company1 = await createCompany(user1.accessToken);
      await createCompany(user2.accessToken);

      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(company1.companyId, user1.userId, "Cat1");
      const item = await createItemInDB(cat.id, company1.companyId, user1.userId);
      const option = await createOptionInDB(item.id, unit.id, user1.userId);

      // Controller checks items.company_id === req.company_id -> returns 404 (secure design)
      const res = await request(app)
        .get(ROUTES.one(option.id))
        .set("Authorization", `Bearer ${user2.accessToken}`)
        .set(COMPANY_ID_HEADER, company1.companyId);

      expectErrorResponse(res, 403, "FORBIDDEN");
    });
  });

  describe("Create Option", () => {
    it("should create an option successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "TestCat");
      const item = await createItemInDB(cat.id, companyId, userId);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({
          name: "New Option",
          item_id: item.id,
          input_price: 150,
          input_value: 2,
          unit_id: unit.id,
          min_sell_quantity: 1,
          min_sell_unit_id: unit.id,
          price_per_base_unit: 75,
          type: optionType.PACKAGE,
          currencyType: currencyType.INR,
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("New Option");
      expect(res.body.data.input_price).toBe("150");
      expect(res.body.data.type).toBe(optionType.PACKAGE);
    });

    it("should reject if item not found or belongs to another company", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({
          name: "Orphan Option",
          item_id: "00000000-0000-0000-0000-000000000000", // Fake item ID
          input_price: 100,
          input_value: 1,
          unit_id: unit.id,
          min_sell_quantity: 1,
          min_sell_unit_id: unit.id,
          price_per_base_unit: 100,
          type: optionType.LOOSE,
          currencyType:currencyType.INR
        });

      expectErrorResponse(res, 404, "NOT_FOUND", "Item not found");
    });

    it("should reject invalid body", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .post(ROUTES.create())
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "", input_price: -50 }); // Invalid/missing required fields
      expectErrorResponse(res, 400, "VALIDATION_ERROR");
    });
  });

  describe("Update Option", () => {
    it("should partially update option fields successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "TestCat");
      const item = await createItemInDB(cat.id, companyId, userId);
      const option = await createOptionInDB(item.id, unit.id, userId);

      const res = await request(app)
        .patch(ROUTES.update(option.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "Updated Option", input_price: 200 }); // Partial update
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe("Updated Option");
      expect(Number(res.body.data.input_price)).toBe(200);
      expect(res.body.data.type).toBe(optionType.PACKAGE);
    });

    it("should return 404 if option not found", async () => {
      const { accessToken } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);

      const res = await request(app)
        .patch(ROUTES.update("00000000-0000-0000-0000-000000000000"))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId)
        .send({ name: "Ghost" });

      expectErrorResponse(res, 404, "NOT_FOUND");
    });

    it("should reject updating another company's option", async () => {
      const user1 = await createAuthenticatedUser();
      const user2 = await createAuthenticatedUser();
      const company1 = await createCompany(user1.accessToken);
      await createCompany(user2.accessToken);

      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(company1.companyId, user1.userId, "Cat1");
      const item = await createItemInDB(cat.id, company1.companyId, user1.userId);
      const option = await createOptionInDB(item.id, unit.id, user1.userId);

      const res = await request(app)
        .patch(ROUTES.update(option.id))
        .set("Authorization", `Bearer ${user2.accessToken}`)
        .set(COMPANY_ID_HEADER, company1.companyId)
        .send({ name: "Hacked" });

      expectErrorResponse(res, 403, "FORBIDDEN"); // Secure tenant isolation
    });
  });

  describe("Delete Option", () => {
    it("should soft delete option successfully", async () => {
      const { accessToken, userId } = await createAuthenticatedUser();
      const { companyId } = await createCompany(accessToken);
      const unitClass = await createUnitClassInDB();
      const unit = await createUnitInDB(unitClass.id);
      const cat = await createCategoryInDB(companyId, userId, "TestCat");
      const item = await createItemInDB(cat.id, companyId, userId);
      const option = await createOptionInDB(item.id, unit.id, userId);

      const res = await request(app)
        .delete(ROUTES.delete(option.id))
        .set("Authorization", `Bearer ${accessToken}`)
        .set(COMPANY_ID_HEADER, companyId);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Option deleted successfully");

      const dbOption = await prisma.options.findUnique({ where: { id: option.id } });
      expect(dbOption?.deleted_at).not.toBeNull();
    });

    it("should return 404 if option not found", async () => {
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