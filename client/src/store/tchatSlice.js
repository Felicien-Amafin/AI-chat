import { createSlice } from "@reduxjs/toolkit";

const tchat = createSlice({
    name: 'tchat',
    initialState: {
        tchatHistory: [],
        userQuestion: '',
        aiAnswer: '',
        defaultMess: 'Comment puis-je vous aider?'
    },
    reducers: {
        setTchatHistory: (state, action) => {
            state.tchatHistory = [
                ... state.tchatHistory, 
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
        resetTchat: (state) => {
            state.tchatHistory = [];
            state.userQuestion = '';
            state.aiAnswer = '';
        }
    }
});

export const { setTchatHistory, setUserQuestion, setAiAnswer, resetTchat } = tchat.actions;
export default tchat.reducer;