import express from "express";
import postController from "../controllers/postController.js";
import checkPostExist from "../middlewares/checkPostExist.js";

const router = express.Router();

router.get("/", postController.index)
router.get("/:id", checkPostExist, postController.show)
router.get("/", postController.store)
router.get("/:id", checkPostExist, postController.update)
router.get("/:id", checkPostExist, postController.modify)
router.get("/:id", checkPostExist, postController.destroy)


export default router;