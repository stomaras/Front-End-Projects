import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { uiSlice } from "./ui-slice";


export const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
    }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;