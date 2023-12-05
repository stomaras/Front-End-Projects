import { IProduct } from "../../models/models";
import { ActionType } from "../action-types";

interface ClearCartAction {
    type:ActionType.CLEAR_CART;
}


interface GetProductsAction {
    type:ActionType.GET_PRODUCTS;
    products:IProduct[];
}

export type Action = ClearCartAction | GetProductsAction;
