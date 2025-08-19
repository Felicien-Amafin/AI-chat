import express from "express";
import { getCategories, getSingleCategorie, deleteSingleCategorie } from "../controllers/categorie.controller.js";

const router = express.Router();

router.get('/', getCategories);
router.get('/:categorieName', getSingleCategorie);
router.delete('/:categorieName', deleteSingleCategorie);

export default router;