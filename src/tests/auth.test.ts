import request from "supertest";
import app from "../app";
import prisma from "../config/prisma";
import { beforeEach, afterAll, describe, expect, it } from "@jest/globals";


    describe("Auth API", () => {
        beforeEach(async () => {
            await prisma.refreshToken.deleteMany();
        
        });

        afterAll(async () => {
            await prisma.$disconnect();
        });

        const createUserPayload = () => {
            const id = Date.now() + Math.floor(Math.random() * 1000);

            return {
            name: "Test User",
            username: `testuser_${id}`,
            email: `test_${id}@example.com`,
            password: "password123",
            };

        };

        const signupUser = async () => {
        const payload = createUserPayload();

        const res = await request(app)
            .post("/api/auth/signup")
            .send(payload);

            return { res, payload };

        };

        describe("Signup", () => {
            it("should signup user", async () => {
            const payload = createUserPayload();

            const res = await request(app)
                .post("/api/auth/signup")
                .send(payload);

            expect(res.status).toBe(201);
            expect(res.body.data.user.email).toBe(payload.email);

            expect(res.headers["set-cookie"]).toBeDefined();
        });

        it("should reject invalid email", async () => {
            const payload = createUserPayload();

            const res = await request(app)
                .post("/api/auth/signup")
                .send({
                ...payload,
                email: "invalid-email",
                });

            expect(res.status).toBe(400);
        });

        it("should reject duplicate email", async () => {
            const payload = createUserPayload();

            await request(app)
                .post("/api/auth/signup")
                .send(payload);

            const res = await request(app)
                .post("/api/auth/signup")
                .send({
                ...payload,
                username: "another_username",
                });

            expect(res.status).toBe(409);
        });

        it("should reject duplicate username", async () => {
            const payload = createUserPayload();

            await request(app)
                .post("/api/auth/signup")
                .send(payload);

            const res = await request(app)
                .post("/api/auth/signup")
                .send({
                ...payload,
                email: "another@example.com",
                });

            expect(res.status).toBe(409);
        });

        });

        describe("Signin", () => {
            it("should signin user", async () => {
            const { payload } = await signupUser();

            const res = await request(app)
                .post("/api/auth/signin")
                .send({
                email: payload.email,
                password: payload.password,
                });

            expect(res.status).toBe(200);
            expect(res.body.data.access_token).toBeDefined();
            expect(res.body.data.refresh_token).toBeDefined();
        });

        it("should reject wrong password", async () => {
            const { payload } = await signupUser();

            const res = await request(app)
                .post("/api/auth/signin")
                .send({
                email: payload.email,
                password: "wrong-password",
                });

            expect(res.status).toBe(401);
        });

        it("should reject unknown user", async () => {
            const res = await request(app)
                .post("/api/auth/signin")
                .send({
                email: "nouser@example.com",
                password: "password123",
                });

            expect(res.status).toBe(401);
        });

        });

        describe("Refresh", () => {
            it("should refresh token", async () => {
                const { res: signup } = await signupUser();

                const cookies = signup.headers["set-cookie"] as string[] | undefined;

                const refreshCookie = cookies!.find((c) =>
                    c.includes("refresh_token")
                );

                expect(refreshCookie).toBeDefined();

                const res = await request(app)
                    .post("/api/auth/refresh")
                    .set("Cookie", refreshCookie!);

                expect(res.status).toBe(200);
                expect(res.body.data.access_token).toBeDefined();
                expect(res.body.data.refresh_token).toBeDefined();
            });

            it("should reject refresh without token", async () => {
                const res = await request(app)
                    .post("/api/auth/refresh");

                expect(res.status).toBe(401);
            });

        });

        describe("Signout", () => {
            it("should signout user", async () => {
                const { res: signup } = await signupUser();

                const cookies = signup.headers["set-cookie"] as string[]|undefined;

                const refreshCookie = cookies!.find((c) =>
                    c.includes("refresh_token")
                );

                expect(refreshCookie).toBeDefined();

                const res = await request(app)
                    .post("/api/auth/signout")
                    .set("Cookie", refreshCookie!);

                expect(res.status).toBe(200);
            });

            it("should reject signout without refresh token", async () => {
                const res = await request(app)
                    .post("/api/auth/signout");

                expect(res.status).toBe(400);
            });

        });
});