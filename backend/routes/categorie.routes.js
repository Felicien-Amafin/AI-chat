import express from "express";
import { createCategorie, getCategories, validateForm } from "../controllers/categorie.controller.js";

const router = express.Router();

router.get('/', getCategories);
router.post('/validate-tchat-form', validateForm);
router.post('/', createCategorie);

export default router;