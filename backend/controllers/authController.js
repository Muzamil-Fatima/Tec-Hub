import User from "../models/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from "../middleware/catchAsyncError.js";
import generateToken from "../utils/sendToken.js";
import { welcomeEmail } from "../utils/emailTemplates.js";
import sendEmail from "../utils/sendEmail.js";
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
    // send welcome email using template
    await sendEmail({
      to: newUser.email,
      subject: "Welcome to TechHub",
      text: `Hi ${newUser.name}, welcome to TecHub!`, // fallback text
      html: welcomeEmail(newUser.name),
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
// login
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
// logout user
const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout Successfully" });
});
export { signup, login, logoutCurrentUser };
