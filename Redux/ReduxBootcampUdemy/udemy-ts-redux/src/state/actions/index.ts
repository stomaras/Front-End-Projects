import { ActionType } from "../action-types/index";

interface IncrementAction {
  type: ActionType.INCREMENT;
  payload: Number;
}

interface DecrementAction {
  type: ActionType.DECREMENT;
  payload: Number;
}

export type Action = IncrementAction | DecrementAction;
