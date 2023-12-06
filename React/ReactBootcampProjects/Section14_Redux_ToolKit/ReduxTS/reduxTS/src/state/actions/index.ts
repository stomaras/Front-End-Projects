import { IProduct } from "../../models/models";
import { ActionType } from "../action-types";


interface ClearCartAction {
    type:ActionType.CLEAR_CART;
}

interface GetProductsAction {
    type:ActionType.GET_PRODUCTS;
    payload:IProduct[];
}

interface RemoveProductAction {
    type:ActionType.REMOVE;
    payload:string;
}

interface IncreaseProductAction {
    type:ActionType.INCREASE;
    payload:string;
}

interface DecreaseProductAction {
    type:ActionType.DECREASE;
    payload:string;
}

interface CalculateTotalsAction {
    type:ActionType.CALCULATE_TOTALS
}


export type Action = ClearCartAction | GetProductsAction | RemoveProductAction | IncreaseProductAction | DecreaseProductAction | CalculateTotalsAction;
