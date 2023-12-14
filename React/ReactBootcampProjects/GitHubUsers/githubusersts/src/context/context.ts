import React, {useState, useEffect, Children, FC, createContext} from "react"
import mockUser from "../mockData/mockUser";
import {IUser, IRepo,IFollower} from "../models/models";


interface ContextType {
    users:IUser[],
}

const contextDefaultValue:ContextType = {
    users: [],
}

export const GithubContext = createContext<ContextType>(contextDefaultValue);


