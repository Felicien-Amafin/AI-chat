import express from "express";
import { createTchat, deleteTchat, getTchat, sendTchatMessage, validateTchatForm } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/validate-form', validateTchatForm);
router.post('/', createTchat);
router.post('/send-message', sendTchatMessage);
router.get('/:tchatId', getTchat);
router.delete('/:tchatId', deleteTchat);

export default router;