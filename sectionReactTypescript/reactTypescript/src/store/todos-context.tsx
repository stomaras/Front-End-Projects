import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
        items:Todo[],
        addTodo:(text:string) => void,
        removeTodo:(id:any) => void,
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo:() => {},
    removeTodo:(id:any) => {},
});

export interface TodosContextProviderProps {
    children:React.ReactNode;
}

const TodosContextProvider:React.FC<TodosContextProviderProps> = (props:TodosContextProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHanlder = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo)
        });
    };

    const removeTodoHanler = (todoId:string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items:todos,
        addTodo: addTodoHanlder,
        removeTodo: removeTodoHanler,
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;