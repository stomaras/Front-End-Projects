import React, { useContext } from 'react'
import { Todo } from "../interfaces/interfaces";
import { TodoContext } from '../context/TodoContext';

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    
    const { toggleTodo } = useContext(TodoContext);
  
    const handleDbClick = () => {
        toggleTodo(todo.id);
    }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through': ''
        }}
            onDoubleClick={handleDbClick} key={todo.id}>
            { todo.type } 
        </li>
  )
}

export default TodoItem