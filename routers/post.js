import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.index)
router.get("/:id", postController.show)
router.get("/", postController.store)
router.get("/:id", postController.update)
router.get("/:id", postController.modify)
router.get("/:id", postController.destroy)


export default router