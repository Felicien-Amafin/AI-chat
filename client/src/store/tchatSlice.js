import { createSlice } from "@reduxjs/toolkit";

const tchat = createSlice({
    name: 'tchat',
    initialState: {
        tchatHistory: [],
        userQuestion: '',
        prevDialog: null,
        defaultMess: 'Comment puis-je vous aider?'
    },
    reducers: {
        setTchatHistory: (state, action) => {
            console.log(action)
            state.tchatHistory = [
                ... state.tchatHistory, 
                { role: "user", parts: [{ text: action.payload.question }] },
                { role: "model", parts: [{ text: action.payload.answer }] }
            ]
        },
        setUserQuestion: (state, action) => {
            state.userQuestion = action.payload;
        },
        /* setPrevDialog: (state, action) => {

        } */
    }
});

export const { setTchatHistory, setUserQuestion } = tchat.actions;
export default tchat.reducer;