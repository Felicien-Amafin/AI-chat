import express from "express";
import { signup, signin, verifyEmail, sendResetEmail, resetPwd, sendsNewAccessTk, logout, givesAuth } from "../controllers/auth.controller.js";
import { verifyAccessTk } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/verify-email/:userId", verifyEmail);
router.post("/send-reset-email", sendResetEmail);
router.post("/password-reset/:token", resetPwd);
router.post("/logout", logout)
router.get("/refresh-token", sendsNewAccessTk);
router.get("/verify-accessTk", verifyAccessTk, givesAuth);

export default router;