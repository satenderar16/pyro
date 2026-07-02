import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import ItemController from "../../controllers/catelog/item.controller";
import OptionController from "../../controllers/catelog/option.controller";
import { authorizeAll } from "../../middleware/companyUser.middleware";
import { PERMISSIONS } from "../../utils/permissions";


const items = PERMISSIONS.ITEMS;
const options = PERMISSIONS.OPTIONS;

const itemRouter = express.Router();


// Get the single category

itemRouter.get("/",authorizeAll(items.READ),ItemController.getMany)// get all items irrespect of category: 
itemRouter.get("/:id",authorizeAll(items.READ),ItemController.getOne);

itemRouter.get("/:id/options",authorizeAll(options.READ), ItemController.getManyOption);
// itemRouter.get("/:catId/category",authorizeAll(items.READ),ItemController.getManyItem);// get items which belongs to category:

// create category:
itemRouter.post("/",authorizeAll(items.CREATE),ItemController.create);


// update category
itemRouter.patch("/:id",authorizeAll(items.UPDATE),ItemController.update);


// delete category:
itemRouter.delete("/:id",authorizeAll(items.DELETE),ItemController.delete);

export default itemRouter;
