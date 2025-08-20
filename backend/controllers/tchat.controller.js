import { CustomError } from "../utils/class.js";
import { tryCatch } from "../utils/tryCatch.js";
import Tchat from "../models/tchat.model.js";
import Categorie from "../models/categorie.model.js";
import { getNewDate } from "../utils/genericFunc.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";

// Initializing gemini-2.0-flash-lite model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

export const sendTchatMessage = tryCatch(async (req, res) => {
    const { user_message, tchat_history, tchat_id } = req.body;
    const userId = req.user.id;

    //Passing tchat's history (useful for contextualization)
    const chat = model.startChat({ history: tchat_history }); 
    
    const result = await chat.sendMessage(user_message);//Sending message to Gemini
    const response = result.response;
    const aiAnswer = response.text();
    
    if(!aiAnswer) throw new CustomError("Le message n'a pas pu être délivré. Réessayez", 500, {});

    const tchat = await Tchat.findOne({userId, _id: tchat_id });
    
    if(!tchat) throw new CustomError("Erreur interne", 500, {});

    const dialog = {
        question: user_message,
        answer: aiAnswer
    }

    tchat.messages.push(dialog); //Saving tchat in db
    await tchat.save();

    return res.status(200).json({ dialog });
});

export const getTchat = tryCatch(async (req, res) => {
    const tchatId = req.params.tchatId.trim();
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(tchatId)) {
        throw new CustomError('Format du tchat Id invalide', 400, {});
    }

    const tchat = await Tchat.findOne({ userId, _id:tchatId });

    if(!tchat) throw new CustomError('Tchat introuvable', 404, {});
    
    return res.status(200).json({ tchat });
});

export const deleteTchat = tryCatch(async (req, res) => {
    const tchatId = req.params.tchatId;
   
    const userId = req.user.id;
    
    //Fetching the tchat to get the categorie's id. 
    const tchat = await Tchat.findOne({ userId, _id:tchatId }); 

    if(!tchat) throw new CustomError('Tchat not found', 404, {});

    const categorieId = tchat.categorieId; //Getting the categorie's id

    const deletedTchat = await Tchat.findOneAndDelete({ userId, _id:tchatId });//Deleting the tchat doc

    if(!deletedTchat) throw new CustomError('Erreur lors de la suppression du tchat', 500, {});
    
    //Fetching the categorie in which the tchat's infos are stored
    const categorie = await Categorie.findOne({ userId, _id:categorieId });

    categorie.tchats.delete(tchatId);//Deleting tchat's info in its corresponding categorie
    await categorie.save();

    return res.status(200).json({ message: 'Tchat has been deleted successfully' });
});

