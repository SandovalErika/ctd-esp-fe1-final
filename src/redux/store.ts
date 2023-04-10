/**
 * Este módulo define el store de Redux para la aplicación, que incluye el reducer de personajes.
 * 
 * @module
 */

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from '../redux/personajesSlice';

/**
 * El store de Redux para la aplicación.
 * 
 * @type {import("@reduxjs/toolkit").EnhancedStore<{personajes: import("../redux/personajesSlice").PersonajesState}, import("@reduxjs/toolkit").AnyAction, [import("@reduxjs/toolkit").Middleware<{}, import("@reduxjs/toolkit").AnyAction, import("@reduxjs/toolkit").DefaultMiddleware<{}, import("@reduxjs/toolkit").AnyAction, never>>]> & {dispatch: ...}.Dispatch<import("@reduxjs/toolkit").AnyAction>>}
 */

const store = configureStore({
   reducer: {
    personajes : characterReducer
   }
});

/**
 * El estado global de la aplicación, que es el tipo de retorno del método getState() del store.
 * 
 * @typedef {import("../redux/personajesSlice").PersonajesState} RootState
 */

/**
 * El método dispatch del store, que acepta cualquier acción.
 * 
 * @typedef {(action: import("@reduxjs/toolkit").AnyAction) => import("@reduxjs/toolkit").AnyAction} AppDispatch
 */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;