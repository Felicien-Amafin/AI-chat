import { CustomError } from "../utils/class.js";
import { getTchatFormErrors } from "../utils/categories.js";
import { tryCatch } from "../utils/tryCatch.js";
import Tchat from "../models/tchat.model.js";
import Categorie from "../models/categorie.model.js";
import { getNewDate } from "../utils/genericFunc.js";

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

export const createTchat = tryCatch(async (req, res) => {
    const { categorieId, } = req.body;
    const userId = req.user.id;

    //Checking if categorie exist so that newly created tchat can be saved in it
    const categorie = await Categorie.findOne({ _id:categorieId});

    if(!categorie) {
        throw new CustomError('Catégorie introuvable', 404, {});
    }

    const newTchat = new Tchat({//Creating new tchat
        categorieId,
        userId,
        date: `${getNewDate()}`,
        messages: []
    });

    newTchat.save();

    return res.status(201).json({
        message: 'Un nouveau tchat a été créé',
        tchat: {
            id: newTchat._id,
            date: newTchat.date,
        }
    });    
})