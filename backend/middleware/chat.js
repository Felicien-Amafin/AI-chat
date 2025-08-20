import { getTchatFormErrors } from "../utils/categories.js";
import { CustomError } from "../utils/class.js";
import { tryCatch } from "../utils/tryCatch.js";

export const validateTchatForm = tryCatch(async (req, res, next) => {
    const { categorie, title} = req.body;
    const errors = getTchatFormErrors(categorie, title);
 
    if (errors) {
        throw new CustomError('Certaines informations sont invalides', 400, errors);
    }

    req.validatedForm = { categorie, title };

    next();
});
