import { getChatFormErrors } from "../utils/chat.js";
import { CustomError } from "../utils/class.js";
import { tryCatch } from "../utils/tryCatch.js";

export const validateChatForm = tryCatch(async (req, res, next) => {
    const { category, title } = req.body;
   
    const errors = getChatFormErrors(category, title);
 
    if (errors) {
        throw new CustomError('Certaines informations sont invalides', 400, errors);
    }

    req.validatedForm = { category, title };

    next();
});
