import { configureStore } from "@reduxjs/toolkit";
import personajesReducer from '../redux/personajesSlice';

const store = configureStore({
   reducer: {
    personajes : personajesReducer
   }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;