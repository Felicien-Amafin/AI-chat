import express from "express";
import { deleteChat, getChat, sendChatMessage } from "../controllers/chat.controller.js";

const router = express.Router();

router.post('/send-message', sendChatMessage);
router.get('/:chatId', getChat);
router.delete('/:chatId', deleteChat);

export default router;