import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
getCategoryById,getCategories,createCategory,updateCategory,deleteCategory
} from "../controllers/category.controller";

const categoryRouter = express.Router();

//  Apply auth to ALL routes below this line to protect each route:
categoryRouter.use(authMiddleware);

//  Protected routes

// Get the single category
categoryRouter.get("/:id",getCategoryById);

//read category: all the subcategories:
 // supports: ?limit=10&page=1 pagination
categoryRouter.get("/", getCategories); 


// create category:
categoryRouter.post("/",createCategory);


// update category
categoryRouter.patch("/:id",updateCategory);


// delete category:
categoryRouter.delete("/:id",deleteCategory);

export default categoryRouter;