import mongoose from "mongoose";

const dialogSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const tchatSchema = new mongoose.Schema({
    messages: {
        type: Array,
        of: dialogSchema
    }, 
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Tchat = mongoose.model('Tchat', tchatSchema);

export default Tchat;