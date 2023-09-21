import CartController from "../controllers/cart.controller";
import { auth } from "../middlewares/auth";

const express = require("express");
const router = express.Router();

router.post("/", auth, CartController.addToCart);
router.get("/", auth, CartController.getAllCarts);
router.get("/:cartId", auth, CartController.getCart);

export default router;
