import { Router } from "express";
const authRoute = Router();
import authController from "../controllers/auth.controller";

authRoute.post("/signup", authController.signup);
authRoute.post("/signin", authController.signin);
authRoute.post("/signout", authController.signout);
authRoute.post("/refresh", authController.refresh);



export default authRoute;