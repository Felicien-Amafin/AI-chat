import express from "express";
import { deleteChat, getChat, sendChatMessage } from "../controllers/chat.controller.js";
import { validateChatForm } from "../middleware/chat.js";
import { launchChatSuggestion } from "../controllers/category.controller.js";

const router = express.Router();

router.post('/send-message', sendChatMessage);
router.post('/from-suggestion', validateChatForm, launchChatSuggestion);
router.get('/:chatId', getChat);
router.delete('/:chatId', deleteChat);

export default router;