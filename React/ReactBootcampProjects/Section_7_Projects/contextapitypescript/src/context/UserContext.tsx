import {createContext, Dispatch, useState ,SetStateAction} from "react";

export interface User {
    name:string;
    email:string;
}

// type of context
export interface UserContextInterface {
    user:User,
    setUser: Dispatch<SetStateAction<User>>
}

// default state
const defaultState = {
    user:{
        name:'',
        email:''
    },
    setUser: (user:User) => {} 
} as UserContextInterface

// context
export const UserContext = createContext<UserContextInterface>(defaultState)

// provider props
type UserProviderProps = {
    children: React.ReactNode
}


// provider
export function UserProvider({children}: UserProviderProps){
 const [user, setUser] = useState<User>({
    name:'',
    email:''
 });
 
 return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
 )
 


}