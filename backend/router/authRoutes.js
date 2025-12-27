// authRoutes.js
import express from "express";
import {
  signup,
  login,
  logoutCurrentUser,
  forgotPassword,
  verifyEmail,
  verifyOtp,
  resetPassword,
  // resendVerification,
  resendResetPasswordOTP,
} from "../controllers/authController.js";
const router = express.Router();

// routes
router.post("/", signup);
router.post("/login", login);
router.get("/verify/:token", verifyEmail);
router.get("/logout", logoutCurrentUser);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);
router.post("/resend-reset-otp", resendResetPasswordOTP);
// router.post("/resend-verification", resendVerification);

// your routes here
export default router;
