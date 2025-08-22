import { tryCatch } from "../utils/tryCatch.js";
import Category from "../models/category.model.js";
import Chat from "../models/chat.model.js";
import { capitalizedFirstChar, getNewDate } from "../utils/genericFunc.js";
import { CustomError } from "../utils/class.js";
import { sortCategoryNames } from "../utils/category.js";


export const createCategoryWithChat  = tryCatch(async (req, res) => {
    const { category, title } = req.validatedForm;
    const userId = req.user.id;

    //checking if category already exist
    const categoryFound = await Category.findOne({ name: category, userId });

    if(categoryFound) {
        throw new CustomError(
            'Choisissez un autre nom de catégorie', 
            400, 
            { category: 'Nom de catégorie déjà existant' }
        );
    }

    //Creating the new category if doesn't alredy exist
    const newCategory = new Category({ name: category, userId, chats: new Map([]) });
    await newCategory.save();

    //Creating a new chat doc in db
    const newChat = new Chat({//Creating new chat
        categoryId: newCategory._id,
        userId,
        date: `${getNewDate()}`,
        messages: []
    });
    await newChat.save();
    
    //Saving new chat in it's corresponding category
    newCategory.chats.set(newChat._id, { title, date: newChat.date });
    await newCategory.save();

    return res.status(201).json({
        message: `La categorie "${newCategory.name} a été créé avec un nouveau chat."`,
        chat_id: newChat._id
    }); 
});

export const createChatInCategory = tryCatch(async (req, res) => {
    const { category, title } = req.validatedForm;
    const userId = req.user.id;
 
    //Checking if category exist so that newly created chat can be saved in it
    const existingCategory = await Category.findOne({ name:category, userId});

    if(!existingCategory) {
        throw new CustomError('Catégorie introuvable', 404, {});
    }

    const newChat = new Chat({//Creating new chat
        categoryId: existingCategory._id,
        userId,
        date: `${getNewDate()}`,
        messages: []
    });
    await newChat.save();

    existingCategory.chats.set(newChat._id, {//Saving new chat in it's corresponding categorie
        title,
        date: newChat.date
    });

    await existingCategory.save();

    return res.status(201).json({
        message: `Le chat "${title}" a été ajouté à ${existingCategory.name}`,
        chat_id: newChat._id
    });    
});

export const getCategories = tryCatch(async (req, res) => {
    const userId = req.user.id;

    const categories = await Category.find({ userId });
    let categoryList = [];

    if(categories.length > 0) {
        categoryList = categories.map((category) => {
            return {
                name: capitalizedFirstChar(category.name),
                id: category._id
            }
        });
    }
   
    const sortedCategories = sortCategoryNames(categoryList);

    return res.status(200).json({ categories: sortedCategories });
});

export const getCategory = tryCatch(async (req, res) => {
    const categoryName = req.params.categoryName;
    const userId = req.user.id;

    if(!categoryName) throw new CustomError('Nom de categorie manquant.', 400, {});

    const category = await Category.findOne({ userId, name: categoryName });

    if(!category) throw new CustomError('Categorie introuvable. Sélectionnez une catégorie existante.', 404, {});

    const chatsList = Array.from(category.chats);

    return res.status(200).json({ chats_list: chatsList.reverse() });
})

export const deleteCategory = tryCatch(async (req, res) => {
    const categoryName = req.params.categoryName;
    const userId = req.user.id;

    const category = await Category.findOne({ userId, name: categoryName });
    const categoryId = category._id;//Get category's id to find related chats to delete

    await Chat.deleteMany({ categoryId }); //Deleting all category's chats

    await Category.findOneAndDelete({ _id:categoryId });//Deleting the category

    return res.status(200).json({ message: `La categorie "${categoryName}" a bien été supprimée.`})
})

