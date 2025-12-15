import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

// const AutoIncrement = mongooseSequence(mongoose);

// define the schema
const userSchema = new mongoose.Schema(
  {
    userId: { type: Number },
    name: { type: String, required: [true, "Name is required"] },
    password: {
      type: String,
      required: [true],
      minlength: [6, "Password must be 6 character long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    resetTokenExpire: Date,
    resetToken: String,

    accountVerified: { type: Boolean, default: false },
    verificationCode: Number,
    verificationCodeExpire: Date,
    verificationToken: String,
    profileImage: {
      type: String,
      required: false,
    },
    status: { type: String, enum: ["Finished", "Active"], default: "Active" },
    role: {
      type: String,
      enum: ["teacher", "student", "admin"],
      default: "student",
    },
  },
  { timestamps: true }
);
// userSchema.plugin(AutoIncrement, { inc_field: "userId", start_seq: 1 });
// create Model
const User = mongoose.model("User", userSchema);
export default User;
