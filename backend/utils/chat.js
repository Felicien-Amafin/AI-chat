import { getNewDate } from "./genericFunc.js";
import Chat from "../models/chat.model.js";

export const getChatFormErrors = (category, title) => {
    //Get chat form's input errors
    const errors = {};
    const CATEGORY_MAX_LENGTH = 40;
    const CATEGORY_MIN_LENGTH = 5;
    const TITLE_MAX_LENGTH  = 65;
    const TITLE_MIN_LENGTH  = 5;
    
    if(
        !category ||
        category.length > CATEGORY_MAX_LENGTH || 
        category.length < CATEGORY_MIN_LENGTH
    ) {
        errors.category = `La catégorie doit être comprise entre ${CATEGORY_MIN_LENGTH} et ${CATEGORY_MAX_LENGTH} caractères`;
    }

    if(
        !title ||
        title.length > TITLE_MAX_LENGTH || 
        title.length < TITLE_MIN_LENGTH
    ) {
        errors.title = `Le titre doit être compris entre ${TITLE_MIN_LENGTH} et ${TITLE_MAX_LENGTH} caractères`;
    }

    const isErrors = Object.values(errors).length > 0;

    return isErrors ? errors : null;
}

export const createNewChat = async (categoryId, userId) => {
    const newChat = new Chat({
        categoryId,
        userId,
        date: `${getNewDate()}`,
        messages: []
    });

    await newChat.save();
    return newChat;
}



