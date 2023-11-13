import { useContext, useReducer, useEffect, createContext, FC } from "react";


interface IContext {
    greeting:string;
}

const contextDefaultValues: IContext = {
    greeting:'greeting',
}

const AppContext = createContext<IContext>(
    contextDefaultValues
);

const AppProvider = ({children} : {children: React.ReactNode;}) => {

    const greeting = contextDefaultValues.greeting;

    return <AppContext.Provider value={{greeting}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;