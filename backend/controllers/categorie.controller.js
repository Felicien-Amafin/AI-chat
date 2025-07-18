import { tryCatch } from "../utils/tryCatch.js";
import Categorie from "../models/categorie.model.js";

export const createCategorie = tryCatch(async (req, res) => {
    return res.status(201).json({
        message: 'Categorie created',
        user: req.user,
    });
});

export const getCategories = tryCatch(async (req, res) => {
    const userId = req.user.id;

    const categories = await Categorie.find({ userId });
    let categoriesNames = [];

    if(categories.length > 0) {
        categoriesNames = categories.map((categorie) => categorie.name);
    }

    return res.status(200).json({ categories_names: categoriesNames });
});

