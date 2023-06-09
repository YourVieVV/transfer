import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reduxSlice/userSlice"
import {userAuthApi} from "../services/UserService";
import {setupListeners} from "@reduxjs/toolkit/query";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    [userAuthApi.reducerPath]: userAuthApi.reducer,
});


export const newStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(newStore.dispatch)

export type RootState = ReturnType<typeof newStore.getState>
export type AppStore = ReturnType<typeof newStore.getState>
export type AppDispatch = typeof newStore.dispatch