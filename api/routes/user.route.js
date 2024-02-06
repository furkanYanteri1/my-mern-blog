import express from "express";
import UserTest from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", UserTest);

export default router;