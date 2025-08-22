import mongoose from "mongoose";

const dialogSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const chatSchema = new mongoose.Schema({
    messages: {
        type: Array,
        of: dialogSchema
    }, 
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;