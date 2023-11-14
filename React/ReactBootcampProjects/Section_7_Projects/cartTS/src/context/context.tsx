import { useContext, useReducer, useEffect, createContext, FC } from "react";
import { ItemState } from "../models/models";
import reducer from "../reducer/reducer";
import { CLEAR_CART, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS, REMOVE } from "../actions/actions";

interface IContext {
    greeting:string;
}

const contextDefaultValues: IContext = {
    greeting:'greeting',
}

const initialState: ItemState = {
    loading: false,
    cart: []
}

const AppContext = createContext<IContext>(
    contextDefaultValues
);



const AppProvider = ({children} : {children: React.ReactNode;}) => {

    const greeting = contextDefaultValues.greeting;

    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{greeting}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext);
}