import {applyMiddleware, createStore} from "redux";
// import allReducers from "../reducers/combineReducer";
import thunk from "redux-thunk";
import {counterSlice} from "../reducers/counterReducer";
import {configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector as rawUseSelector } from "react-redux";
import counterReducer from "../reducers/counterReducer";
import authReducer from "../reducers/authReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
console.log(store.getState());
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

// const store = createStore(
//     // allReducers,
//     // applyMiddleware(thunk)
// );

// export default store;