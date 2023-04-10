import { configureStore } from "@reduxjs/toolkit";
import characterReducer from '../redux/personajesSlice';

const store = configureStore({
   reducer: {
    personajes : characterReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;