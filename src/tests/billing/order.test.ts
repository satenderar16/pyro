import request from "supertest";
import app from "../../app";
import prisma from "../../config/prisma";

import {
    beforeEach,
    afterAll,
    describe,
    expect,
    it,
} from "@jest/globals";
import { currencyType, orderStatus, paymentType } from "@prisma/client";
import { optionType } from "../../../prisma/generated";

const ORDER_BASE = "/api/billing/order";
const COMPANY_ID_HEADER = "x-company-id";

const ROUTES = {
    list: () => ORDER_BASE,
    one: (id: string) => `${ORDER_BASE}/${id}`,
    create: () => ORDER_BASE,
    update: (id: string) => `${ORDER_BASE}/${id}`,
    status: (id: string) => `${ORDER_BASE}/${id}/status`,
    delete: (id: string) => `${ORDER_BASE}/${id}`,
};

type AuthFixture = {
    accessToken: string;
    userId: string;
};

type CompanyFixture = {
    companyId: string;
};

const uniqueId = () =>
    `${Date.now()}_${Math.floor(Math.random() * 100000)}`;

const createAuthenticatedUser = async (): Promise<AuthFixture> => {
    const payload = {
        name: "Test User",
        username: `user_${uniqueId()}`,
        email: `user_${uniqueId()}@example.com`,
        password: "password123",
    };

    const signup = await request(app)
        .post("/api/auth/signup")
        .send(payload);

    expect(signup.status).toBe(201);

    const signin = await request(app)
        .post("/api/auth/signin")
        .send({
            email: payload.email,
            password: payload.password,
        });

    expect(signin.status).toBe(200);

    const accessToken = signin.body.data.access_token;

    const dbUser = await prisma.users.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (!dbUser)
        throw new Error("User not found");

    return {
        accessToken,
        userId: dbUser.id,
    };
};

const createCompany = async (
    accessToken: string
): Promise<CompanyFixture> => {
    const payload = {
        name: `Company ${uniqueId()}`,
        contact: "9800000000",
        address: "Kathmandu",
    };

    const res = await request(app)
        .post("/api/company")
        .set(
            "Authorization",
            `Bearer ${accessToken}`
        )
        .send(payload);

    expect(res.status).toBe(201);

    return {
        companyId: res.body.data.company.id,
    };
};

const createCategory = async (
    companyId: string,
    userId: string
) => {
    return prisma.categories.create({
        data: {
            name: `Category ${uniqueId()}`,
            company_id: companyId,
            created_by: userId,
            updated_by: userId,
        },
    });
};

const createItem = async (
    categoryId: string,
    companyId: string,
    userId: string
) => {
    return prisma.items.create({
        data: {
            name: `Item ${uniqueId()}`,
            cat_id: categoryId,
            company_id: companyId,
            created_by: userId,
            updated_by: userId,
        },
    });
};

const createUnit = async () => {
    const cls = await prisma.unitClass.create({
        data: {
            name: `CLASS_${uniqueId()}`,
            base_unit_name: "gram",
            base_unit_symbol: "g",
        },
    });

    return prisma.units.create({
        data: {
            class_id: cls.id,
            name: "Kilogram",
            symbol: `kg_${uniqueId()}`,
            to_base_factor: 1000,
        },
    });
};

const createOption = async (
    itemId: string,
    unitId: string,
    userId: string
) => {
    return prisma.options.create({
        data: {
            item_id: itemId,

            unit_id: unitId,
            min_sell_unit_id: unitId,

            name: `Option ${uniqueId()}`,

            input_price: 500,
            input_value: 1,

            price_per_base_unit: 500,

            min_sell_quantity: 1,

            type: optionType.LOOSE,

            currency:currencyType.INR,

            created_by: userId,
            updated_by: userId,
        },
    });
};

const createOrder = async (
    companyId: string,
    userId: string
) => {
    return prisma.orders.create({
        data: {
            company_id: companyId,

            created_by: userId,

            status_changed_by: userId,

            payment_type: paymentType.CASH,

            order_name: "Sample Order",
        },
    });
};

const expectErrorResponse = (
    res: request.Response,
    status: number,
    errorCode?: string
) => {
    expect(res.status).toBe(status);

    expect(res.body.success).toBe(false);

    if (errorCode) {
        expect(
            res.body.error.code
        ).toBe(errorCode);
    }
};


describe("Order API", () => {
    beforeEach(async () => {
    await prisma.orderOptions.deleteMany();
    await prisma.orders.deleteMany();

    await prisma.options.deleteMany();

    await prisma.items.deleteMany();

    await prisma.categories.deleteMany();

    await prisma.units.deleteMany();
    await prisma.unitClass.deleteMany();

    await prisma.companyInvite.deleteMany();

    await prisma.companyUser.deleteMany();

    await prisma.companyRole.deleteMany();

    await prisma.company.deleteMany();

    await prisma.refreshToken.deleteMany();

    await prisma.users.deleteMany();
});

afterAll(async () => {
    await prisma.$disconnect();
});


    describe("GET /orders/:id", () => {
        it("should return order successfully", async () => {

            const { accessToken, userId } = await createAuthenticatedUser();
                

            const { companyId } = await createCompany(accessToken);
                

            const order = await createOrder(companyId, userId);

            const res = await request(app)
                .get(ROUTES.one(order.id))
                .set("Authorization",`Bearer ${accessToken}`)
                .set(COMPANY_ID_HEADER, companyId);

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.id).toBe(order.id);
        });

        it("should return 404 if order does not exist", async () => {

            const { accessToken } =
                await createAuthenticatedUser();

            const { companyId } =
                await createCompany(accessToken);

            const res = await request(app)
                .get(
                    ROUTES.one(
                        "00000000-0000-0000-0000-000000000000"
                    )
                )
                .set(
                    "Authorization",
                    `Bearer ${accessToken}`
                )
                .set(
                    COMPANY_ID_HEADER,
                    companyId
                );

            expectErrorResponse(
                res,
                404,
                "NOT_FOUND"
            );

        });

        it("should reject invalid uuid", async () => {

            const { accessToken } =
                await createAuthenticatedUser();

            const { companyId } =
                await createCompany(accessToken);

            const res = await request(app)
                .get(
                    ROUTES.one("invalid")
                )
                .set(
                    "Authorization",
                    `Bearer ${accessToken}`
                )
                .set(
                    COMPANY_ID_HEADER,
                    companyId
                );

            expectErrorResponse(
                res,
                400,
                "VALIDATION_ERROR"
            );

        });

    });

    describe("GET /orders", () => {

        it("should list orders", async () => {

            const { accessToken, userId } =
                await createAuthenticatedUser();

            const { companyId } =
                await createCompany(accessToken);

            await createOrder(
                companyId,
                userId
            );

            await createOrder(
                companyId,
                userId
            );

            const res = await request(app)
                .get(
                    ROUTES.list()
                )
                .set(
                    "Authorization",
                    `Bearer ${accessToken}`
                )
                .set(
                    COMPANY_ID_HEADER,
                    companyId
                );

            expect(res.status).toBe(200);

            expect(res.body.success).toBe(true);

            expect(
                Array.isArray(
                    res.body.data.data
                )
            ).toBe(true);

            expect(
                res.body.data.data.length
            ).toBeGreaterThanOrEqual(2);

            expect(
                res.body.data.pagination.has_next
            ).toBe(false);

        });

        it("should paginate orders", async () => {

            const { accessToken, userId } =
                await createAuthenticatedUser();

            const { companyId } =
                await createCompany(accessToken);

            for (let i = 0; i < 5; i++) {
                await createOrder(
                    companyId,
                    userId
                );
            }

            const res = await request(app)
                .get(
                    `${ROUTES.list()}?page=1&limit=2`
                )
                .set(
                    "Authorization",
                    `Bearer ${accessToken}`
                )
                .set(
                    COMPANY_ID_HEADER,
                    companyId
                );

            expect(res.status).toBe(200);

            expect(
                res.body.data.data.length
            ).toBe(2);

            expect(
                res.body.data.pagination.has_next
            ).toBe(true);

        });

        it("should return empty list", async () => {

            const { accessToken } = await createAuthenticatedUser();

            const { companyId } = await createCompany(accessToken);

            const res = await request(app)
                .get(
                    ROUTES.list()
                )
                .set(
                    "Authorization",
                    `Bearer ${accessToken}`
                )
                .set(
                    COMPANY_ID_HEADER,
                    companyId
                );

            expect(res.status).toBe(200);

            expect(
                res.body.data.data.length
            ).toBe(0);

        });

    });

    describe("POST /orders", () => {
  it("should create order successfully", async () => {
    const { accessToken, userId } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const category = await createCategory(companyId, userId);
    const item = await createItem(category.id, companyId, userId);
    const unit = await createUnit();
    const option = await createOption(item.id, unit.id, userId);

    const payload = {
      order_name: "Test Order",
      payment_type: paymentType.CASH,
      discount: 10,
      cash_amount: 100,
      items: [
        {
          option_id: option.id,
          sell_unit_id: unit.id,
          sell_quantity: 2,
        },
      ],
    };

    const res = await request(app)
      .post(ROUTES.create())
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toBeDefined();
  });

  it("should fail with invalid payload", async () => {
    const { accessToken } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const res = await request(app)
      .post(ROUTES.create())
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({});

    expectErrorResponse(res, 400, "VALIDATION_ERROR");
  });
    });

    describe("PUT /orders/:id", () => {
  it("should update order successfully", async () => {
    const { accessToken, userId } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const order = await createOrder(companyId, userId);

    const res = await request(app)
      .put(ROUTES.update(order.id))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({
        order_name: "Updated Order",
        discount: 20,
        cash_amount: 200,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.order_name).toBe("Updated Order");
  });

  it("should return 404 if order not found", async () => {
    const { accessToken } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const res = await request(app)
      .put(ROUTES.update("00000000-0000-0000-0000-000000000000"))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({
        order_name: "Updated Order",
      });

    expectErrorResponse(res, 404, "NOT_FOUND");
  });

  it("should reject invalid uuid", async () => {
    const { accessToken } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const res = await request(app)
      .put(ROUTES.update("invalid"))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({
        order_name: "Updated Order",
      });

    expectErrorResponse(res, 400, "VALIDATION_ERROR");
  });
    });

    describe("PATCH /orders/:id/status", () => {
  it("should change order status successfully", async () => {
    const { accessToken, userId } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const order = await createOrder(companyId, userId);

    const res = await request(app)
      .patch(ROUTES.status(order.id))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({
        status: orderStatus.FULFILLED,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should fail with invalid status payload", async () => {
    const { accessToken, userId } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const order = await createOrder(companyId, userId);

    const res = await request(app)
      .patch(ROUTES.status(order.id))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({
        status: "INVALID_STATUS",
      });

    expectErrorResponse(res, 400, "VALIDATION_ERROR");
  });

  it("should return 404 if order not found", async () => {
    const { accessToken } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const res = await request(app)
      .patch(ROUTES.status("00000000-0000-0000-0000-000000000000"))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId)
      .send({
        status: orderStatus.FULFILLED
      });

    expectErrorResponse(res, 404, "NOT_FOUND");
         });
    });

    describe("DELETE /orders/:id", () => {
  it("should cancel order successfully", async () => {
    const { accessToken, userId } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const order = await createOrder(companyId, userId);

    const res = await request(app)
      .delete(ROUTES.delete(order.id))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should return 404 if order not found", async () => {
    const { accessToken } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const res = await request(app)
      .delete(ROUTES.delete("00000000-0000-0000-0000-000000000000"))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId);

    expectErrorResponse(res, 404, "NOT_FOUND");
  });

  it("should reject invalid uuid", async () => {
    const { accessToken } = await createAuthenticatedUser();
    const { companyId } = await createCompany(accessToken);

    const res = await request(app)
      .delete(ROUTES.delete("invalid"))
      .set("Authorization", `Bearer ${accessToken}`)
      .set(COMPANY_ID_HEADER, companyId);

    expectErrorResponse(res, 400, "VALIDATION_ERROR");
  });
});

});