import express from "express";
import signUp  from "../controllers/signUp.controller.js";
const router = express.Router();

router.post("/signup", signUp);
export default router;