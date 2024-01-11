import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import {createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export interface CounterState {
    counter:number;
}

export const initialState:CounterState = {
    counter:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCounter:(state:CounterState, action:PayloadAction) => {
            return {
                counter:state.counter + 1,
            }
        },
        addCounterBy5:(state:CounterState, action:PayloadAction) => {
            return {
                counter:state.counter + 5,
            }
        },
        decreaseCounter:(state:CounterState, action:PayloadAction) => {
            return {
                counter:state.counter - 1
            }
        }
    }
})


export default counterSlice.reducer;
export const {addCounter, decreaseCounter, addCounterBy5} = counterSlice.actions;
