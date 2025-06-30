import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
    },
    reducers: {
        signInUser: (state, action)=> {
            state.user = action.payload;
        }
    }
})

export const { signInUser } = auth.actions;
export default auth.reducer;