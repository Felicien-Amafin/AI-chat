import express from "express";
import { getCategories } from "../controllers/categorie.controller.js";

const router = express.Router();

router.get('/', getCategories);
/* router.post('/', createCategorie); */

export default router;