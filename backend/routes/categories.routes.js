import express from "express";
import { getCategories, getSingleCategorie, deleteSingleCategorie, createCategoryWithChat, createChatInCategory } from "../controllers/categorie.controller.js";
import { validateTchatForm } from "../middleware/chat.js";

const router = express.Router();

router.post('/', validateTchatForm, createCategoryWithChat);
router.post('/:categoryName/chats', validateTchatForm, createChatInCategory);
router.get('/', getCategories);
router.get('/:categorieName', getSingleCategorie);
router.delete('/:categorieName', deleteSingleCategorie);

export default router;