import express from "express";
import { createTchat, validateTchatForm } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/validate-form', validateTchatForm);
router.post('/', createTchat);

export default router;