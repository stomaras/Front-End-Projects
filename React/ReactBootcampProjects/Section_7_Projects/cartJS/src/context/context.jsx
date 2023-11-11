import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "../reducer/reducer";
import { CLEAR_CART, INCREASE, DECREASE, REMOVE, DISPLAY_ITEMS, LOADING } from "../actions/actions";
import cartItems from "../data/data";

const AppContext = createContext();

const initialState = {
    loading:false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
}



export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer,initialState);

    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }



    return (<AppContext.Provider value={{...state, clearCart}}>
        {children}
    </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}


/*
All our function will be here in the context for example clear cart, remove, increase, decrease, fetch data
and in there we 'll dispatch those actions

*/