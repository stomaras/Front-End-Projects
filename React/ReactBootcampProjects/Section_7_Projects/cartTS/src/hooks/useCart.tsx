import CartContext, { UseCartContextType } from "../context/context";
import { useContext } from "react";

const useCart = (): UseCartContextType => {
    return useContext(CartContext);
}

export default useCart;