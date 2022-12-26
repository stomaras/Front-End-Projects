import {ActionType} from "../action-types";

export const incrementCounter = (value: number) => {
    return {
        type: ActionType.COUNTER_INCREMENT,
        payload: value
    }
}


export const decrementCounter = (value: number) => {
    return {
        type: ActionType.COUNTER_DECREMENT,
        payload: value
    }
}

export const toggleCounter = (value:boolean) => {
    return {
        type: ActionType.TOGGLE,
        payload: value
    }
}