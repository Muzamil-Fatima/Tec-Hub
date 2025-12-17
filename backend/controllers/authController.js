import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import asyncHandler from "../middleware/catchAsyncError.js";
import generateToken from "../utils/sendToken.js";
import { welcomeEmail } from "../utils/emailTemplates.js";
import sendEmail from "../utils/sendEmail.js";
import { verificationEmail } from "../utils/emailTemplates.js";
// ------------------------------- signup
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please provide all required fields");
  }
  //   chk user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  //    Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ name, email, password: hashPassword });
  try {
    await newUser.save();
    // send verification email
    await sendEmail({
      to: newUser.email,
      subject: "Verify your email for TecHub",
      text: `Hi ${newUser.name}, please verify your email by clicking the link: ${process.env.FRONTEND_URL}`,
      html: verificationEmail(newUser.name),
    });

    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (error) {
    // console.error("Signup error:", error); // debug
    res.status(400).json({ message: error.message }); // send real error
  }
});
// -------------------------- verifyEmail
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    emailVerifiedToken: hashToken,
    emailVerifiedExpire: { $gt: Date.now() },
  });
  if (!user) {
    throw new Error("Invalid or expired token");
  }
  user.isEmailVerified = true;
  user.emailVerifiedToken = undefined;
  user.emailVerifiedExpire = undefined;
  await user.save();
  // send welcome email using template
  await sendEmail({
    to: newUser.email,
    subject: "Welcome to TechHub",
    text: `Hi ${newUser.name}, welcome to TecHub!`, // fallback text
    html: welcomeEmail(newUser.name),
  });
  res.status(200).json({ message: "Email verified successfully" });
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
export { signup, login, logoutCurrentUser, forgotPassword };

// export const forgetPassword = catchAsyncError(async (req, res, next) => {
//   const user = await User.findOne({
//     email: req.body.email,
//     accountVerified: true,
//   });

//   if (!user) {
//     return next(new ErrorHandler("User not found", 404));
//   }

//   // Generate 6-digit OTP
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   user.resetPasswordOTP = otp;
//   user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 mins expiry
//   await user.save({ validateBeforeSave: false });

//   const message = `Your OTP for resetting password is: ${otp}\n\nThis OTP will expire in 15 minutes.\n\nIf you did not request this, please ignore.`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: "Lenka Coach App - Password Reset OTP",
//       message,
//     });

//     res.status(200).json({
//       success: true,
//       message: `OTP sent to ${user.email} successfully.`,
//     });
//   } catch (error) {
//     user.resetPasswordOTP = undefined;
//     user.resetPasswordExpire = undefined;
//     await user.save({ validateBeforeSave: false });

//     return next(new ErrorHandler("Cannot send OTP, please try again.", 500));
//   }
// });
