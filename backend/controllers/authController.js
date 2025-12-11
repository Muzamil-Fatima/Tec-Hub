import User from "../models/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from "../middleware/catchAsyncError.js";
import generateToken from "../utils/sendToken.js";

const signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please provide all required fields");
  }
  //   chk user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) res.status(400).send("User already exists");
  //    Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUsr = await User.findOne({ email });
  if (existingUsr) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUsr.password
    );

    if (isPasswordValid) {
      createToken(res, existingUsr._id);

      res.status(201).json({
        _id: existingUsr._id,
        username: existingUsr.username,
        email: existingUsr.email,
        isAdmin: existingUsr.isAdmin,
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
