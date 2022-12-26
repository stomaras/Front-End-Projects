import { type } from "os";
import {ActionType} from "../action-types";
import {Action} from "../actions";
import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
    counter: number;
    showCounter: boolean;
}

const InitialCounterState: CounterState = {
    counter: 0,
    showCounter: true,
};

const reducer = (
    state: CounterState = InitialCounterState, 
    action: Action
): CounterState => {
    switch (action.type){
        case ActionType.COUNTER_INCREMENT:
            return { 
                counter: state.counter + action.payload, 
                showCounter: state.showCounter 
            };
        case ActionType.COUNTER_DECREMENT:
            return { 
                counter: state.counter - action.payload,
                showCounter: state.showCounter
            };
        case ActionType.TOGGLE:
            return {
                counter: state.counter,
                showCounter: !state.showCounter,
            }
        default:
            return state;
    }
};

export default reducer;


/*
Type of actions we expect to receive is 

Increment Action
{type:'increment'}

Decrement Action
{type:'decrement'}

Counter Action 
{type:'Counter Error', error:'error'}






*/

