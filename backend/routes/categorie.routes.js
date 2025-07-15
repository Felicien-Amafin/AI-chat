import express from "express";
import { createCategorie } from "../controllers/categorie.controller.js";

const router = express.Router();

router.post('/', createCategorie);

export default router;