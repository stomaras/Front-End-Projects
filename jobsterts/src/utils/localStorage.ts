import { User } from "../features/user/userSlice";

export const addUserToLocalStorage = (user:User) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
}

export const getUserFromLocalStorage = () : User=> {
    const result = localStorage.getItem('user');
    const user = result? JSON.parse(result): null;
    return user;
}