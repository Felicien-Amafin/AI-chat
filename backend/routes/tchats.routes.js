import express from "express";
import { validateForm } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/validate-form', validateForm);

export default router;