import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "./catchAsyncError.js";

// check if the user is auth or not
const authenticate = asyncHandler(async (req, res, next) => {
  let token;
  // Read JWT from the "jwt" token
  token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token.process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

// User admin or not?
const authorizedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not Authorized as an Admin");
  }
};

export { authenticate, authorizedAdmin };
