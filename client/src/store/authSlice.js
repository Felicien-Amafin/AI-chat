import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')),
        accessToken: null
    },
    reducers: {
        setUserCred: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
        logoutUser: (state)=> {
            state.user = null;
            state.accessToken = null;
            localStorage.removeItem('user');
        }
    }
})

export const { setUserCred } = auth.actions;
export default auth.reducer;