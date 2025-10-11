import { CustomError } from "../utils/class.js";
import { tryCatch } from "../utils/tryCatch.js";
import Chat from "../models/chat.model.js";
import Category from "../models/category.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mongoose from "mongoose";
import { createNewChat } from "../utils/chat.js";
import { addChatToCategory } from "../utils/category.js";

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

export const launchChatSuggestion = tryCatch(async(req, res) => {
    const { category, title } = req.body;
    const userId = req.user.id;
    
    //checking if category already exist
    const existingCategory = await Category.findOne({ name: category, userId });

    // Checks if the category exists and has any chats
    if(existingCategory) {
        let existingChat;
        
        // Loop through all chats in the category to find a suggested chat
        for (const [chatId, chatData] of existingCategory.chats.entries()) {
            if (chatData.isSuggestion === true) {
                // If a suggested chat is found, store its ID and mark it as started
                existingChat = { chat_id:chatId, has_prev_messages:true };
                break;
            }
        }

        if(existingChat) return res.status(200).json({ ...existingChat});//else return chat found

        if (!existingChat) {
            //If no chat found create new chat
            const newChat = await createNewChat(existingCategory._id, userId);

            addChatToCategory(existingCategory, newChat, title, true);
            
            return res.status(201).json({ //Return newly created chat
                has_prev_messages: false,
                chat_id: newChat._id,
                message: `Un nouveau chat a été ajouté à "${existingCategory.name}"`,
            });
        }
    }

    //Creating the new category if doesn't alredy exist
    const newCategory = new Category({ name: category, userId, chats: new Map([]) });
    await newCategory.save();

    //Creating a new chat doc in db
    const newChat = await createNewChat(newCategory._id, userId);
   
    //Saving new chat in its corresponding category
    addChatToCategory(newCategory, newChat, title, true);
    
    return res.status(201).json({ 
        has_prev_messages: false,
        chat_id: newChat._id,
        message: `La categorie "${newCategory.name} a été créé avec un nouveau chat."`,
    });
});
