import express from "express";
import { getCategories, validateForm } from "../controllers/categorie.controller.js";

const router = express.Router();

router.get('/', getCategories);
router.post('/validate-chat-form', validateForm);

export default router;