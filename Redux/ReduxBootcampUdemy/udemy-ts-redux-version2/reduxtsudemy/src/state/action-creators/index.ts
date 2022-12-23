import {ActionType} from "../action-types";
import {Action} from "../actions";

const incrementCounter = (number: Number) => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.COUNTER_INCREMENT
        });
    }
}