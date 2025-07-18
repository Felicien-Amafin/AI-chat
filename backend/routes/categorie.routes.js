import express from "express";
import { createCategorie, getCategories } from "../controllers/categorie.controller.js";

const router = express.Router();

router.get('/', getCategories);
router.post('/', createCategorie);

export default router;