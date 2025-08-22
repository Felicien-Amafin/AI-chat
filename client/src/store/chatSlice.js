import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
    name: 'chat',
    initialState: {
        chatHistory: [],
        userQuestion: '',
        aiAnswer: '',
    },
    reducers: {
        setChatHistory: (state, action) => {
            state.chatHistory = [
                ... state.chatHistory, 
                { role: "user", parts: [{ text: action.payload.question }] },
                { role: "model", parts: [{ text: action.payload.answer }] }
            ]
        },
        setUserQuestion: (state, action) => {
            state.userQuestion = action.payload;
        },
        setAiAnswer: (state, action) => {
            state.aiAnswer = action.payload;
        },
        resetChat: (state) => {
            state.chatHistory = [];
            state.userQuestion = '';
            state.aiAnswer = '';
        }
    }
});

export const { setChatHistory, setUserQuestion, setAiAnswer, resetChat } = chat.actions;
export default chat.reducer;