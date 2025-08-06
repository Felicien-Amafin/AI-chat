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

export const updateCategorie = tryCatch(async (req, res) => {
    const { categorieId } = req.body;
    const { tchat } = req.body;
    const userId = req.user.id;

    //Getting categorie to save new tchat in it
    const categorie = await Categorie.findOne({ _id: categorieId, userId });

    if(categorie) {
        throw new CustomError(
            'categorie inexistante', 
            401, 
            {}
        );
    }

    categorie.tchats.set(tchat.id, {
        title: tchat.title,
        date: tchat.date
    });

    categorie.save();

    return res.satus(200).json({ message: 'Un nouveau tchat a été ajouté à la catégorie' });
})