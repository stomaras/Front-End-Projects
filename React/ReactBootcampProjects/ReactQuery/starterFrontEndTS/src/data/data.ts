import { nanoid } from "nanoid";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ITask } from "../models/models";



export const defaultItems:ITask[] = [
    { id:nanoid(), title:'walk the dog', isDone:false },
    { id:nanoid(), title:'wash dishes', isDone:false },
    { id:nanoid(), title:'drink coffee', isDone:true },
    { id:nanoid(), title:'take a nap', isDone:false },
];