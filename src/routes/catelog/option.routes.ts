
import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import OptionController from "../../controllers/catelog/option.controller";

const optionRouter = express.Router();

//  Apply auth to ALL routes below this line to protect each route:
optionRouter.use(authMiddleware);

// option routes
optionRouter.get("/:id", OptionController.getOne);
optionRouter.post("/", OptionController.create);
optionRouter.patch("/:id", OptionController.update);
optionRouter.delete("/:id", OptionController.delete);

// item options


export default optionRouter;