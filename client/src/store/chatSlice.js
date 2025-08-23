import { createSlice } from "@reduxjs/toolkit";
import { buildChatHistory } from "../utils";

const chat = createSlice({
    name: 'chat',
    initialState: {
        chatHistory: [],
        userQuestion: '',
        aiAnswer: '',
        isSuggestedQuestion: false
    },
    reducers: {
        setChatHistory: (state, action) => {
           state.chatHistory = buildChatHistory(action.payload);
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
            state.isSuggestedQuestion = false;
        },
        setIsSuggestedQuestion(state, action) {
            state.isSuggestedQuestion = action.payload;
        }
    }
});

export const { 
    setChatHistory, 
    setUserQuestion, 
    setAiAnswer, 
    resetChat, 
    setIsSuggestedQuestion 
} = chat.actions;

export default chat.reducer;