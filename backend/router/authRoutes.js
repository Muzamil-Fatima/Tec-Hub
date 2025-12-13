// authRoutes.js
import express from "express";
import { signup, login } from "../controllers/authController.js";
const router = express.Router();

// routes
router.post("/", signup);
router.post("/login", login);

// your routes here
export default router;
