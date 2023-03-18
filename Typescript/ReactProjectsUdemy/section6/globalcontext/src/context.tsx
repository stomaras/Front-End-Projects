import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


export type GlobalContext = {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}

const initialGlobalContext = {
    name: 'tom',
    setName: () => {}
}

const GlobalContext = createContext<GlobalContext>(initialGlobalContext);

export const useGlobalContext = () => {
    useContext(GlobalContext);
}


const AppContext = (props:React.PropsWithChildren<{}>) => {

    const [name, setName] = useState('peter');


    return <GlobalContext.Provider value={{name, setName}}>
        {props.children}
    </GlobalContext.Provider>
};

export default AppContext;