import {ActionType} from "../action-types";

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