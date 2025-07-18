import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null
    },
    reducers: {
        setUserCred: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        logoutUser: (state)=> {
            state.user = null;
            state.accessToken = null;
        }
    }
})

export const { setUserCred, setAccessToken, logoutUser } = auth.actions;
export default auth.reducer;