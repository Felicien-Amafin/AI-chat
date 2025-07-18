import mongoose from "mongoose";

const tchatSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
});

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tchats: {
        type: Map,
        of: tchatSchema
    }
});

const Categorie = mongoose.model('Categorie', categorieSchema);

export default Categorie;