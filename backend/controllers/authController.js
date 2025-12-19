import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import asyncHandler from "../middleware/catchAsyncError.js";
import generateToken from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";
import { verificationEmail } from "../utils/emailTemplates.js";
// ------------------------------- signup
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please provide all required fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  //  Generate random token
  const verificationToken = crypto.randomBytes(32).toString("hex");

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    verificationToken,
    verificationCodeExpire: Date.now() + 15 * 60 * 1000, // 15 minutes
  });

  const verifyUrl = `${process.env.BACKEND_URL}/api/auth/verify/${verificationToken}`;

  await sendEmail({
    to: newUser.email,
    subject: "Verify your email for TecHub",
    html: verificationEmail(newUser.name, verifyUrl),
  });

  //  Do NOT auto-login yet
  res.status(201).json({
    success: true,
    message: "Signup successful! Check your email to verify your account.",
  });
});
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({
    verificationToken: token,
    verificationCodeExpire: { $gt: Date.now() }, // check expiry
  });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Invalid or expired verification link" });
  }

  user.accountVerified = true;
  user.verificationToken = undefined;
  user.verificationCodeExpire = undefined;

  await user.save();
  //  Redirect to frontend home page
  res.redirect(`${process.env.FRONTEND_URL}/?verified=true`);
});

// -------------------------------- login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUsr = await User.findOne({ email });
  if (existingUsr) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUsr.password
    );

    if (isPasswordValid) {
      generateToken(res, existingUsr._id);

      res.status(201).json({
        _id: existingUsr._id,
        name: existingUsr.name,
        email: existingUsr.email,
        role: existingUsr.role,
      });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
});
// ---------------------------- logout user
const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout Successfully" });
});
// ---------------------------------- forgot password
const forgotPassword = asyncHandler(async (req, res) => {
  const notExistUser = await User.findOne({ email });
  if (!notExistUser) {
    res.status(400);
    throw new Error("User does not exist");
  }
});
export { signup, login, logoutCurrentUser, forgotPassword, verifyEmail };
