import { tryCatch } from "../utils/tryCatch.js";
import Categorie from "../models/categorie.model.js";
import Tchat from "../models/tchat.model.js";
import { capitalizedFirstChar, getNewDate } from "../utils/genericFunc.js";
import { CustomError } from "../utils/class.js";
import { sortCategorieNames } from "../utils/categories.js";


export const createCategoryWithChat  = tryCatch(async (req, res) => {
    const { categorie, title } = req.validatedForm;
    const userId = req.user.id;

    //checking if categorie already exist
    const categorieFound = await Categorie.findOne({ name: categorie, userId });

    if(categorieFound) {
        throw new CustomError(
            'Choisissez un autre nom de catégorie', 
            400, 
            { categorie: 'Nom de catégorie déjà existant' }
        );
    }

    //Creating the new categorie if doesn't alredy exist
    const newCategorie = new Categorie({ name: categorie, userId, tchats: new Map([]) });
    await newCategorie.save();

    //Creating a new tchat doc in db
    const newTchat = new Tchat({//Creating new tchat
        categorieId: newCategorie._id,
        userId,
        date: `${getNewDate()}`,
        messages: []
    });
    await newTchat.save();
    
    //Saving new tchat in it's corresponding categorie
    newCategorie.tchats.set(newTchat._id, { title, date: newTchat.date });
    await newCategorie.save();

    return res.status(201).json({
        message: `La categorie "${newCategorie.name} a été créé avec un nouveau chat."`,
        tchat_id: newTchat._id
    }); 
});

export const createChatInCategory = tryCatch(async (req, res) => {
    req.validatedForm = { categorie, title };
    const userId = req.user.id;
 
    //Checking if categorie exist so that newly created tchat can be saved in it
    const categorie = await Categorie.findOne({ name:categorie, userId});

    if(!categorie) {
        throw new CustomError('Catégorie introuvable', 404, {});
    }

    const newTchat = new Tchat({//Creating new tchat
        categorieId: categorie._id,
        userId,
        date: `${getNewDate()}`,
        messages: []
    });
    await newTchat.save();

    categorie.tchats.set(newTchat._id, {//Saving new tchat in it's corresponding categorie
        title: tchat_title,
        date: newTchat.date
    });

    await categorie.save();

    return res.status(201).json({
        message: `Le chat "${title}" a été ajouté à ${categorie.name}`,
        tchat_id: newTchat._id
    });    
});

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
   
    const sortedCategories = sortCategorieNames(categorieList);

    return res.status(200).json({ categories: sortedCategories });
});

export const getSingleCategorie = tryCatch(async (req, res) => {
    const categorieName = req.params.categorieName;
    const userId = req.user.id;

    if(!categorieName) throw new CustomError('Nom de categorie manquant.', 400, {});

    const categorie = await Categorie.findOne({ userId, name: categorieName });

    if(!categorie) throw new CustomError('Categorie introuvable. Sélectionnez une catégorie existante.', 404, {});

    const tchatsList = Array.from(categorie.tchats);
    
    return res.status(200).json({ tchats_list: tchatsList.reverse() });
})

export const deleteSingleCategorie = tryCatch(async (req, res) => {
    const categorieName = req.params.categorieName;
    const userId = req.user.id;

    const categorie = await Categorie.findOne({ userId, name: categorieName });
    const categorieId = categorie._id;//Get categorie's id to find related tchats to delete

    await Tchat.deleteMany({ categorieId }); //Deleting all categorie's tchats

    await Categorie.findOneAndDelete({ _id:categorieId });//Deleting the categorie

    return res.status(200).json({ message: `La categorie "${categorieName}" a bien été supprimée.`})
})

