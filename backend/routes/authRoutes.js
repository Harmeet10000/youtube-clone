import express from "express";
import { signup, signin } from "../controllers/authController.js";

const router = express.Router();

// Sign Up/ Create Account
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

// Google Sign In
router.post("/google");

export default router;
