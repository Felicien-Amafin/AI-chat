import { tryCatch } from "../utils/tryCatch.js";
import Categorie from "../models/categorie.model.js";
import Tchat from "../models/tchat.model.js";
import { capitalizedFirstChar } from "../utils/genericFunc.js";
import { CustomError } from "../utils/class.js";
import { sortCategorieNames } from "../utils/categories.js";

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