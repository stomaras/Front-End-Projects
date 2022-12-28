import {applyMiddleware, createStore} from "redux";
// import allReducers from "../reducers/combineReducer";
import thunk from "redux-thunk";
import {counterSlice} from "../reducers/counterReducer";
import {configureStore, PreloadedState} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector as rawUseSelector } from "react-redux";
import counterReducer from "../reducers/counterReducer";
import authReducer from "../reducers/authReducer";
import { rootReducer } from "../reducers/combineReducer";
import { type } from "os";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export function setupStore(preloadedState?: PreloadedState<RootState>){
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export const useAppSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export const useAppDispatch: () => AppDispatch = useDispatch
