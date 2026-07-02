import { Router } from "express";
import OrderController from "../../controllers/billing/order.controller";
import { PERMISSIONS } from "../../utils/permissions";
import { authorizeAll } from "../../middleware/companyUser.middleware";

const orders = PERMISSIONS.ORDERS;
const orderRouter = Router();

orderRouter.get("/",authorizeAll(orders.READ), OrderController.getMany);

orderRouter.get("/:id",authorizeAll(orders.READ), OrderController.getOne);

orderRouter.post("/",authorizeAll(orders.CREATE), OrderController.create);

orderRouter.put("/:id",authorizeAll(orders.UPDATE), OrderController.update);

orderRouter.patch("/:id/status",authorizeAll(orders.UPDATE), OrderController.changeStatus);

orderRouter.delete("/:id",authorizeAll(orders.DELETE), OrderController.delete);

export default orderRouter;