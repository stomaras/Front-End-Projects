import React from 'react'
import { Todo } from "../interfaces/interfaces";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({todo}: TodoItemProps) => {
  
    const handleDbClick = () => {
        console.log('handleClick', todo.type);
    }

    return (
        <li onDoubleClick={handleDbClick} key={todo.id}>
            { todo.type } 
        </li>
  )
}

export default TodoItem