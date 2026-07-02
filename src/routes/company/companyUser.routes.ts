import { Router } from "express";

import CompanyUserController from "../../controllers/company/companyUser.controller"; 
import { authorizeAll, companyUserMiddleware } from "../../middleware/companyUser.middleware"; // Your membership middleware
import {PERMISSIONS } from "../../utils/permissions";

const companyUserRouter = Router();
const user = PERMISSIONS.USER;

/**
 * All routes below require the user to be part of the company.
 * The middleware should attach `req.user.company_id`, `req.user.user_id`, and `req.user.user_type`.
 */

// it is a permission based route only accessible to user who are either admin or owner of the company:


companyUserRouter.use(companyUserMiddleware,authorizeAll(user.CREATE,user.UPDATE,user.READ,user.DELETE));
// 1. Read multiples (Get list of company members)
companyUserRouter.get("/", CompanyUserController.getList);

// 2. Read single (Get details of a specific company member)
companyUserRouter.get("/:userId", CompanyUserController.getOne);

// 3. Verify User (Accept an invited user into the company)
companyUserRouter.post("/:userId/verify", CompanyUserController.verifyUser);

// 4. Update Member (Update user type or roles with  constraints)
companyUserRouter.patch("/:userId", CompanyUserController.updateMember);

// 5. Delete User (Soft-delete/remove a member from the company)
companyUserRouter.delete("/:userId", CompanyUserController.deleteUser);

export default companyUserRouter;