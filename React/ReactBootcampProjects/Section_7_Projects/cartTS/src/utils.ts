import { CartItemType } from "./context/context";

export const getTotals = (cart:CartItemType[]) => {
    let totalAmount = 0;
    let totalCost = 0;

    for(let {amount, price} of cart.values()){
        totalAmount += amount;
        totalCost = totalCost + (amount * Number(price))
    }

    return {totalAmount,totalCost}
} 