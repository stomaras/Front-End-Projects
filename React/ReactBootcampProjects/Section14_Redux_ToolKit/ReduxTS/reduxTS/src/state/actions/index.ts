import { IProduct } from "../../models/models";
import { ActionType } from "../action-types";

const product:IProduct = {
    id: "",
    title: "",
    price: "",
    img: "",
    amount: 0
}

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


export type Action = ClearCartAction | GetProductsAction | RemoveProductAction | IncreaseProductAction;
