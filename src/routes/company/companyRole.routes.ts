import { Router } from "express";
import CompanyRoleController from "../../controllers/company/companyRole.controller";

import { authMiddleware } from "../../middleware/auth.middleware";
import { companyUserMiddleware,authorizeAll } from "../../middleware/companyUser.middleware";
import { PERMISSIONS } from "../../utils/permissions";

const roles = PERMISSIONS.ROLES;

const roleRouter = Router();


// Create Role
roleRouter.post(
  "/",
  authMiddleware,
  companyUserMiddleware,
  authorizeAll(roles.CREATE),
  CompanyRoleController.create
);

// Get All Roles
roleRouter.get(
  "/",
  authMiddleware,
  companyUserMiddleware,
  authorizeAll(roles.READ),
  CompanyRoleController.getList
);

// Get Single Role
roleRouter.get(
  "/:roleId",
  authMiddleware,
  companyUserMiddleware,
  authorizeAll(roles.READ),
  CompanyRoleController.getOne
);

// Update Role
roleRouter.put(
  "/:roleId",
  authMiddleware,
  companyUserMiddleware,
  authorizeAll(roles.UPDATE),
  CompanyRoleController.update
);

// Delete Role
roleRouter.delete(
  "/:roleId",
  authMiddleware,
  companyUserMiddleware,
  authorizeAll(roles.DELETE),
  CompanyRoleController.delete
);

export default roleRouter;