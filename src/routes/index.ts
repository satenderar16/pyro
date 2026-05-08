import { Router } from 'express';
import authRoute from './auth.routes.ts';
import itemRoute from "./item.routes.ts";

import prisma from "../config/prisma";

import categoryRoutes from "./category.routes.ts";
const router = Router();


router.get("/", (req:any, res:any) => {
  res.json({ message: "API is running " });
});



router.use("/auth", authRoute);
router.use("/categories",categoryRoutes);
router.use("/items",itemRoute);

export default router;