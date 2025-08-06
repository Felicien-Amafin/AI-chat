import { tryCatch } from "../utils/tryCatch.js";
import Categorie from "../models/categorie.model.js";
import { capitalizedFirstChar } from "../utils/genericFunc.js";
import { CustomError } from "../utils/class.js";

export const getCategories = tryCatch(async (req, res) => {
    const userId = req.user.id;

    const categories = await Categorie.find({ userId });
    let categorieList = [];

    if(categories.length > 0) {
        categorieList = categories.map((categorie) => {
            return {
                name: capitalizedFirstChar(categorie.name),
                id: categorie._id
            }
        });
    }

    return res.status(200).json({ categories: categorieList });
});

export const createCategorie = tryCatch(async (req, res) => {
    const { categorie } = req.body;
    const userId = req.user.id;

    //checking if categorrie already exist
    const categorieFound = await Categorie.findOne({ name: categorie, userId });

    if(categorieFound) {
        throw new CustomError(
            'Nom de catégorie déjà existant', 
            400, 
            { categorie: 'Choisissez un autre nom de catégorie' }
        );
    }

    //Creating the new categorie if doesn't alredy exist
    const newCategorie = new Categorie({
        name: categorie,
        userId,
        tchats: new Map([])
    });

    await newCategorie.save();

    return res.status(201).json({ 
        categorie: { 
            id: newCategorie._id,
            name: newCategorie.name
        } 
    });
});

