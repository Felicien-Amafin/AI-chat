import { tryCatch } from "../utils/tryCatch.js";

export const createCategorie = tryCatch(async (req, res) => {
    return res.status(201).json({
        message: 'Categorie created',
        user: req.user,
    });
});