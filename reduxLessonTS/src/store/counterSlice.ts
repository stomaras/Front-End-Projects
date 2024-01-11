import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import {createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export interface CounterState {
    counter:number;
    showCounter:boolean;
}

export const initialState:CounterState = {
    counter:0,
    showCounter:true,
}


export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCounter:(state:CounterState, action:PayloadAction<number>) => {
            return {
                counter:state.counter + action.payload,
                showCounter:state.showCounter,
                isAuthenticated:false,
            }
        },
        addCounterBy5:(state:CounterState, action:PayloadAction<number>) => {
            return {
                counter:state.counter + 5,
                showCounter:state.showCounter,
                isAuthenticated:false,
            }
        },
        decreaseCounter:(state:CounterState, action:PayloadAction<number>) => {
            return {
                counter:state.counter - action.payload,
                showCounter:state.showCounter,
                isAuthenticated:false,
            }
        },
        toggleCounter:(state:CounterState, action:PayloadAction) => {
            return {
                showCounter:!state.showCounter,
                counter:state.counter,
                isAuthenticated:false,
            }
        }
    }
})



export default counterSlice.reducer;
export const {addCounter, decreaseCounter, addCounterBy5, toggleCounter} = counterSlice.actions;
