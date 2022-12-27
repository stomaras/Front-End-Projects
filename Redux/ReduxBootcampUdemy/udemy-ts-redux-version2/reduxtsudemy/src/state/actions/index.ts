import {ActionType} from "../action-types";
import {counterSlice} from "../reducers/counterReducer";
import {authSlice} from "../reducers/authReducer";

interface CounterIncrementAction {
    type:ActionType.COUNTER_INCREMENT;
    payload:1
}

interface CounterDecrementAction {
    type:ActionType.COUNTER_DECREMENT;
    payload:-1
}

interface ToggleAction {
    type: ActionType.TOGGLE;
}



export type Action = CounterIncrementAction | CounterDecrementAction | ToggleAction;

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;




