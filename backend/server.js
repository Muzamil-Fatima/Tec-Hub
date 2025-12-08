import express from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";
import dotenv from "dotenv";

//Files
import connectDB from "./config/database.js";
import userRoutes from "./router/userRoutes.js";
import authRouter from "./router/authRoutes.js";

//Configuration
dotenv.config();
connectDB();

//Building Server
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());
// removeUnverifiedAccounts();

// allow request
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRouter);

// server listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
