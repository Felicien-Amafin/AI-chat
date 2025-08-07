import express from "express";
import { createTchat, sendTchatMessage, validateTchatForm } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/validate-form', validateTchatForm);
router.post('/', createTchat);
router.post('/send-message', sendTchatMessage);

export default router;