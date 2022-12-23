import { type } from "os";
import {ActionType} from "../action-types";
import {Action} from "../actions";

interface CounterState {
    counter:number;
    error: string | null;
}

const InitialCounterState: CounterState = {
    counter:0,
    error: null,
};

const reducer = (
    state: CounterState = InitialCounterState, 
    action: Action
): CounterState => {
    switch (action.type){
        case ActionType.COUNTER_INCREMENT:
            return { counter: action.payload, error:null };
        case ActionType.COUNTER_DECREMENT:
            return { counter: action.payload, error:null };
        case ActionType.COUNTER_ERROR:
            return { counter: 0, error: action.payload};
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

