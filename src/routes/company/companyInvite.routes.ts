
import { Router } from "express";
import InviteController from "../../controllers/company/companyInvite.controller";
import { authorizeAll, companyUserMiddleware } from "../../middleware/companyUser.middleware";
import { PERMISSIONS } from "../../utils/permissions";

const invite =PERMISSIONS.INVITE;
const companyInviteRoutes = Router();

// this route is become the subroute of company no need of authmiddleware:
// companyInviteRoutes.use(authMiddleware);

companyInviteRoutes.post(
  "/",
  companyUserMiddleware,
  authorizeAll(invite.CREATE),
  InviteController.createInvite
);

companyInviteRoutes.get(
  "/received",
  InviteController.getReceivedInvites
);

companyInviteRoutes.get(
  "/received/:id",
  InviteController.getReceivedInvite
);

companyInviteRoutes.get(
  "/sent",
  companyUserMiddleware,
  authorizeAll(invite.READ),
  InviteController.getSentInvites
);

companyInviteRoutes.get(
  "/sent/:id",
  companyUserMiddleware,
  authorizeAll(invite.READ),
  InviteController.getSentInvite
);

companyInviteRoutes.patch(
  "/accept/:code",
  InviteController.acceptInvite
);

companyInviteRoutes.delete(
  "/:id",
  companyUserMiddleware,
  authorizeAll(invite.DELETE),
  InviteController.deleteInvite
);
export default companyInviteRoutes;