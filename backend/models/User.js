import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
import bcrypt from "bcrypt.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import Stream from "stream";
import { profile } from "console";
// create connection for plugin
const connection = mongoose.connection;
const AutoIncrement = mongooseSequence(mongoose);

// define the schema
const userSchema = new mongoose.Schema(
  {
    userId: { type: Number },
    name: { type: String, required: [true, "Name is required"] },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be 6 character long"],
      select: false,
    },
    email: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be 6 character long"],
      select: false,
    },
    accountVerified: { type: Boolean, default: false },
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetToken: String,
    resetTokenExpire: Date,
    verificationToken: String,
    profileImage: {
      type: String,
      required: false,
    },
    status: { type: String, enum: ["Finished", "Active"], default: "Active" },
    role: {
      type: String,
      enum: ["doctor", "clinic", "patient"],
      default: "patient",
    },
  },
  { timestamps: true }
);

// create Model
const User = mongoose.model("User", userSchema);
export default User;
