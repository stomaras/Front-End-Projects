import { useContext, useReducer, useEffect, createContext, FC } from "react";
import { Item, ItemState } from "../models/models";
import reducer from "../reducer/reducer";
import { CLEAR_CART, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS, REMOVE } from "../actions/actions";
import cartItems from "../data/data";

interface IContext {
    greeting:string;
    cart:Map<string,Item>;
    clearCart:() => void;
}

const contextDefaultValues: IContext = {
    greeting: 'greeting',
    cart: new Map(cartItems.map((item) => [item.id, item])),
    clearCart: () => {}
}

const initialState: ItemState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item]))
}

const AppContext = createContext<IContext>(
    contextDefaultValues
);


const AppProvider = ({children} : {children: React.ReactNode;}) => {

    const greeting = contextDefaultValues.greeting;


    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    const cart = contextDefaultValues.cart;


    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{greeting, cart, clearCart}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext);
}