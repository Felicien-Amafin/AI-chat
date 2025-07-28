import { tryCatch } from "../utils/tryCatch.js";
import Categorie from "../models/categorie.model.js";
import { capitalizedFirstChar } from "../utils/genericFunc.js";
import { CustomError } from "../utils/class.js";
import { getTchatFormErrors } from "../utils/categories.js";

export const validateForm = tryCatch(async (req, res) => {
    const { categorie, title} = req.body;
    console.log(categorie)
    console.log(title)
    const errors = getTchatFormErrors(categorie, title);
    
    if (errors) {
        throw new CustomError('Certaines informations sont invalides', 400, errors);
    }

    return res.status(200).json({ message: 'Formulaire conforme.'});
});


export const getCategories = tryCatch(async (req, res) => {
    const userId = req.user.id;

    const categories = await Categorie.find({ userId });
    let categoriesNames = [];

    if(categories.length > 0) {
        categoriesNames = categories.map((categorie) => capitalizedFirstChar(categorie.name));
    }

    return res.status(200).json({ categories_names: categoriesNames });
});

