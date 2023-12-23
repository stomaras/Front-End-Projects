import { createContext, useState, Dispatch, SetStateAction, Children } from "react";

export type User = {
    name:string;
    email:string;
}

export interface UserContextInterface {
    user:User,
    setUser:Dispatch<SetStateAction<User>>,
}

const defaultState = {
    user: {
        name:'',
        email:''
    },
    setUser:(user:User) => {}
} as UserContextInterface

export const UserContext = createContext<UserContextInterface>(defaultState)

type UserProviderProps = {
    children:React.ReactNode
}

export default function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<User>({name:'', email:''});

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}