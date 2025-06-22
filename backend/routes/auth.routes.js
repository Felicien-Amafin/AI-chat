import express from "express";
import { signup, signin, verifyEmail, sendResetEmail, resetPwd } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/verify-email/:userId", verifyEmail);
router.post("/send-reset-email", sendResetEmail);
router.post("/password-reset/:token", resetPwd);

export default router;