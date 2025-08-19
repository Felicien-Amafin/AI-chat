import express from "express";
import { createTchatInNewCategorie , deleteTchat, getTchat, sendTchatMessage, validateTchatForm } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/new', validateTchatForm, createTchatInNewCategorie);
router.post('/send-message', sendTchatMessage);
router.get('/:tchatId', getTchat);
router.delete('/:tchatId', deleteTchat);

export default router;