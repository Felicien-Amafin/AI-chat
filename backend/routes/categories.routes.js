import express from "express";
import { createCategorie, getCategories, getSingleCategorie } from "../controllers/categorie.controller.js";

const router = express.Router();

router.get('/', getCategories);
router.get('/:categorieName', getSingleCategorie);
/* router.delete('/:categorieName', deleteSingleCategorie); */
router.post('/', createCategorie);

export default router;