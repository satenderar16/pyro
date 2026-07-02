import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";

import companyUserRouter from "./companyUser.routes";
import companyInviteRouter from "./companyInvite.routes";

import {getCompany,getJoinedCompany,postCreatCompany,updateCompany,deleteCompany} from "../../controllers/company/company.controller";
import companyRoleRouter from "./companyRole.routes";


const companyRouter = express.Router();

companyRouter.use(authMiddleware);


// company-user,invites and be used as subroutes within company route
companyRouter.use('/users',companyUserRouter);
companyRouter.use('/invites',companyInviteRouter);
companyRouter.use('/roles',companyRoleRouter);



 // supports: ?limit=10&page=1 pagination
companyRouter.get("/joined", getJoinedCompany ); 


//NOTE:  all company route are independent of companyUserMiddleware, 
companyRouter.get("/:id",getCompany);

companyRouter.post("/",postCreatCompany);


//only Owner can update/delete the company:
companyRouter.patch("/:id",updateCompany);

companyRouter.delete("/:id",deleteCompany);




export default companyRouter;