import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "../reducer/reducer";
import { CLEAR_CART, INCREASE, DECREASE, REMOVE, DISPLAY_ITEMS, LOADING } from "../actions/actions";
import cartItems from "../data/data";
import { getTotals } from "../utils";

const AppContext = createContext();

const initialState = {
    loading:false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
}

export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer,initialState);
    const {totalAmount, totalCost} = getTotals(state.cart);


    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }


    const remove = (id) => {
        dispatch({type: REMOVE, payload: {id}})
    }

    const increase = (id) => {
        dispatch({type: INCREASE, payload: {id}});
    }

    const decrease = (id) => {
        dispatch({type: DECREASE, payload: {id}});
    }



    return (<AppContext.Provider value={{...state, clearCart, remove, increase, decrease}}>
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