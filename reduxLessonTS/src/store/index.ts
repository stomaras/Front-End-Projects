import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;