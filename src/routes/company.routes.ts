import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";

import {getCompany,getJoinedCompany,postCreatCompany,updateCompany,deleteCompany} from "../controllers/company.controller";


const companyRouter = express.Router();

companyRouter.use(authMiddleware);

// all company route are independent of companyUserMiddleware, 


companyRouter.get("/:id",getCompany);

 // supports: ?limit=10&page=1 pagination
companyRouter.get("/joined", getJoinedCompany); 

companyRouter.post("/create",postCreatCompany);

companyRouter.patch("/update/:id",updateCompany);

companyRouter.delete("/delete/:id",deleteCompany);



export default companyRouter;