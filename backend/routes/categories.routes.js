import express from "express";
import { getCategories, getCategory, deleteCategory, createCategoryWithChat, createChatInCategory } from "../controllers/category.controller.js";
import { validateChatForm } from "../middleware/chat.js";

const router = express.Router();

router.post('/', validateChatForm, createCategoryWithChat);
router.post('/:categoryName/chats', validateChatForm, createChatInCategory);
router.get('/', getCategories);
router.get('/:categoryName', getCategory);
router.delete('/:categoryName', deleteCategory);

export default router;