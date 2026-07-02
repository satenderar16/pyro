import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import CategoryController from "../../controllers/catelog/category.controller";
import { authorizeAll, companyUserMiddleware } from "../../middleware/companyUser.middleware";
import { PERMISSIONS } from "../../utils/permissions";
import categoryRouter from "./category.routes";
import itemRouter from "./item.routes";
import optionRouter from "./option.routes";

const catelogRouter = express.Router();


// making sure all the catelogs only for the authenticated user and only for the companyUser:
catelogRouter.use(authMiddleware,companyUserMiddleware);


catelogRouter.use('/category',categoryRouter);

// item router:
catelogRouter.use('/item',itemRouter);

// options router:
catelogRouter.use("/option",optionRouter);

export default catelogRouter;