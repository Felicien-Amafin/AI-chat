import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import tchatReducer from './tchatSlice';

export const store = configureStore({
    reducer: {
      auth: authReducer,
      tchat: tchatReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
    })
});