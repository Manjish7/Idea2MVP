import IndexController from "../controllers/index.controller";

const express = require("express");
const router = express.Router();

router.get("/say-hello", IndexController.sayHello);

export default router;
