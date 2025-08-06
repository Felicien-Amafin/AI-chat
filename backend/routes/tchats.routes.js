import express from "express";
import { createTchat, validateForm } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/validate-form', validateForm);
router.post('/', createTchat);

export default router;