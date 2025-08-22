import { CustomError } from "../utils/class.js";
import { tryCatch } from "../utils/tryCatch.js";
import Chat from "../models/chat.model.js";
import Category from "../models/category.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";

// Initializing gemini-2.0-flash-lite model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

export const sendChatMessage = tryCatch(async (req, res) => {
    const { user_message, chat_history, chat_id } = req.body;
    const userId = req.user.id;

    //Passing chat's history (useful for contextualization)
    const chat = model.startChat({ history: chat_history }); 
    
    const result = await chat.sendMessage(user_message);//Sending message to Gemini
    const response = result.response;
    const aiAnswer = response.text();
    
    if(!aiAnswer) throw new CustomError("Le message n'a pas pu être délivré. Réessayez", 500, {});

    const existingChat = await Chat.findOne({userId, _id: chat_id });
    
    if(!existingChat) throw new CustomError("Erreur interne", 500, {});

    const dialog = {
        question: user_message,
        answer: aiAnswer
    }

    existingChat.messages.push(dialog); //Saving chat in db
    await existingChat.save();

    return res.status(200).json({ dialog });
});

export const getChat = tryCatch(async (req, res) => {
    const chatId = req.params.chatId.trim();
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(chatId)) {
        throw new CustomError('Format du chat Id invalide', 400, {});
    }

    const chat = await Chat.findOne({ userId, _id:chatId });

    if(!chat) throw new CustomError('Chat introuvable', 404, {});
    
    return res.status(200).json({ chat });
});

export const deleteChat = tryCatch(async (req, res) => {
    const chatId = req.params.chatId;
   
    const userId = req.user.id;
    
    //Fetching the chat to get the category's id. 
    const chat = await Chat.findOne({ userId, _id:chatId }); 

    if(!chat) throw new CustomError('Chat not found', 404, {});

    const categoryId = chat.categoryId; //Getting the category's id

    const deletedChat = await Chat.findOneAndDelete({ userId, _id:chatId });//Deleting the chat doc

    if(!deletedChat) throw new CustomError('Erreur lors de la suppression du chat', 500, {});
    
    //Fetching the category in which the chat's infos are stored
    const category = await Category.findOne({ userId, _id:categoryId });

    category.chats.delete(chatId);//Deleting chat's info in its corresponding category
    await category.save();

    return res.status(200).json({ message: 'Chat has been deleted successfully' });
});

