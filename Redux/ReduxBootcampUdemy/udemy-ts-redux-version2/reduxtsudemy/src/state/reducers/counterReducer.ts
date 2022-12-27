import { type } from "os";
import {ActionType} from "../action-types";
import {Action} from "../actions";
import {createSlice, configureStore} from '@reduxjs/toolkit';
import { createStore } from "redux";

export interface CounterState {
    counter: number;
    showCounter: boolean;
}

export const initialCounterState: CounterState = {
    counter: 0,
    showCounter: true,
};

export const counterSlice = createSlice({
        name: 'counter',
        initialState: initialCounterState,
        reducers: {
            increment(state) {
                state.counter++;
            },
            decrement(state) {
                state.counter--;
            },
            increase(state, action) {
                state.counter = state.counter + action.payload;
            },
            toggleCounter(state) {
                state.showCounter = !state.showCounter;
            }
        }
    });

export default counterSlice.reducer;

// const counterReducer = (
//     state: CounterState = InitialCounterState, 
//     action: Action
// ): CounterState => {
//     switch (action.type){
//         case ActionType.COUNTER_INCREMENT:
//             return { 
//                 counter: state.counter + action.payload, 
//                 showCounter: state.showCounter 
//             };
//         case ActionType.COUNTER_DECREMENT:
//             return { 
//                 counter: state.counter - action.payload,
//                 showCounter: state.showCounter
//             };
//         case ActionType.TOGGLE:
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter,
//             }
//         default:
//             return state;
//     }
// };

//export default counterReducer;

// const store = createStore(counterSlice.reducer);

// export default store

/*
Type of actions we expect to receive is 

Increment Action
{type:'increment'}

Decrement Action
{type:'decrement'}

Counter Action 
{type:'Counter Error', error:'error'}






*/

