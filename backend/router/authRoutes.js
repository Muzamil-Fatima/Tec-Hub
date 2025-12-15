// authRoutes.js
import express from "express";
import {
  signup,
  login,
  logoutCurrentUser,
  forgotPassword,
} from "../controllers/authController.js";
const router = express.Router();

// routes
router.post("/", signup);
router.post("/login", login);
router.get("/logout", logoutCurrentUser);
router.get("/forgot-password", forgotPassword);

// your routes here
export default router;
