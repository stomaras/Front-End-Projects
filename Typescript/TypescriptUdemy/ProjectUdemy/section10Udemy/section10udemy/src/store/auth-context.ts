import React from "react";
import { createContext, useState } from "react";

// we can create type or interface is the same
export type UserStatus = {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    onLogout: () => void
}

export const AuthContext = React.createContext<UserStatus>({ isLoggedIn: false } as UserStatus);


