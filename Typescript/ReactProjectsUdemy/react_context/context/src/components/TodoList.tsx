import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { log } from 'console'
import TodoItem from './TodoItem';

export const TodoList = () => {

    const { todoState } = useContext(TodoContext);
    const { todos } = todoState
    console.log(todoState);

    return (
        <ul>
            { todos.map(todo => <TodoItem todo={todo} />) }
        </ul>
  )
}

export default TodoList