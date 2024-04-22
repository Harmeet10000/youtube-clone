import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videoRoutes from "./routes/videoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to DB successfully");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/video", videoRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(err.status).json({
    success: false,
    status,
    message,
  });
});

app.listen(3000, () => {
  connect();

  console.log("Server is running on port 3000");
});
