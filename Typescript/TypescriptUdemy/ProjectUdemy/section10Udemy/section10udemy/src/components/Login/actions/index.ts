import { ActionType } from "../actions-types/index";

export interface UserInputAction {
    val?: any;
    type: any; 
}

export interface UserInputBlurAction {
    val?: any;
    type: any;
}

export type Action = UserInputAction | UserInputBlurAction