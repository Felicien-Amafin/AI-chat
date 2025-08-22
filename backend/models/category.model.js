import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    isSuggestion: { type: Boolean, default: false } 
});

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    chats: {
        type: Map,
        of: chatSchema
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;