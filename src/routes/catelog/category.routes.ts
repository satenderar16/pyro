import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import CategoryController from "../../controllers/catelog/category.controller";
import { authorizeAll, companyUserMiddleware } from "../../middleware/companyUser.middleware";
import { PERMISSIONS } from "../../utils/permissions";
import ItemController from "../../controllers/catelog/item.controller";

const categoryRouter = express.Router();


const category = PERMISSIONS.CATEGORIES;
const item = PERMISSIONS.ITEMS;


//read category: all the subcategories:
 // supports: ?limit=10&page=1 pagination
categoryRouter.get("/",authorizeAll(category.READ), CategoryController.getMany); 


// create category:
categoryRouter.post("/",authorizeAll(category.CREATE),CategoryController.createCategory);


// Get the single category
categoryRouter.get("/:id",authorizeAll(category.READ),CategoryController.getOne);


categoryRouter.get("/:id/items",authorizeAll(item.READ),CategoryController.getManyItem);


// update category
categoryRouter.patch("/:id",authorizeAll(category.UPDATE),CategoryController.updateCategory);


// delete category:
categoryRouter.delete("/:id",authorizeAll(category.DELETE),CategoryController.deleteCategory);

export default categoryRouter;