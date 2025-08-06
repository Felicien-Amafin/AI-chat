import { CustomError } from "../utils/class.js";
import { getTchatFormErrors } from "../utils/categories.js";
import { tryCatch } from "../utils/tryCatch.js";

export const validateForm = tryCatch(async (req, res) => {
    const { categorie, title} = req.body;
    const errors = getTchatFormErrors(categorie, title);
 
    if (errors) {
        throw new CustomError('Certaines informations sont invalides', 400, errors);
    }

    return res.status(200).json({ 
        form: { categorie, title },
        message: 'Formulaire conforme.'
    });
});