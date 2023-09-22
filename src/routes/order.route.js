import OrderController from "../controllers/order.controller";
import { auth } from "../middlewares/auth";

const express = require("express");
const router = express.Router();

router.post("/", auth, OrderController.addToOrder);

export default router;
