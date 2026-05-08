import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
getItemById,getItems,createItem,updateItem,deleteItem
} from "../controllers/item.controller";

const itemRouter = express.Router();

//  Apply auth to ALL routes below this line to protect each route:
itemRouter.use(authMiddleware);

//  Protected routes

// Get the single category
itemRouter.get("/:id",getItemById);

//read category: all the subcategories:
 // supports: ?limit=10&page=1 pagination
itemRouter.get("/", getItems); 


// create category:
itemRouter.post("/",createItem);


// update category
itemRouter.patch("/:id",updateItem);


// delete category:
itemRouter.delete("/:id",deleteItem);

export default itemRouter;