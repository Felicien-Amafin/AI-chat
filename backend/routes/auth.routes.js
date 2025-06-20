import express from "express";
import { signup, verifyEmail } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-email/:userId", verifyEmail);

export default router;