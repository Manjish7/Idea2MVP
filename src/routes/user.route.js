import express from "express";
import UserController from "../controllers/user.controller";
import { auth } from "../middlewares/auth";
const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/me", auth, UserController.me);
router.put("/", auth, UserController.update);

export default router;
