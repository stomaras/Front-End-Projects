import { ActionType } from "../action-types";
import { Action } from "../actions";

const IncrementNumber = (num: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ActionType.INCREMENT,
      payload: num + 1,
    });
  };
};

const DecrementNumber = (num: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ActionType.DECREMENT,
      payload: num - 1,
    });
  };
};
