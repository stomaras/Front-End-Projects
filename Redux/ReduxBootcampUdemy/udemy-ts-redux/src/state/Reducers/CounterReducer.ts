import { ActionType } from "../action-types";
import { Action } from "../actions";
interface CounterState {
  counter: number;
}

export const CounterReducer = (
  state: CounterState,
  action: Action
): CounterState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { counter: state.counter + 1 };
    case ActionType.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
