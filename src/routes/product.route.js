import express from "express";
import ProductController from "../controllers/product.controller";
import { auth } from "../middlewares/auth";
const router = express.Router();

router.post("/", auth, ProductController.create);
router.get("/:product_id", ProductController.getSingle);
router.get("/", ProductController.getAll);
router.put("/:product_id", ProductController.update);
router.delete("/:product_id", ProductController.delete);

export default router;
