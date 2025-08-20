import express from "express";
import { deleteTchat, getTchat, sendTchatMessage } from "../controllers/tchat.controller.js";

const router = express.Router();

router.post('/send-message', sendTchatMessage);
router.get('/:tchatId', getTchat);
router.delete('/:tchatId', deleteTchat);

export default router;