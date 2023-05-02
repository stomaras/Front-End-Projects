import React, { useReducer } from 'react'
import { TodoContext } from './TodoContext'
import { TodoState } from '../interfaces/interfaces'
import { todoReducer } from './TodoReducer'


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            type: 'Orange',
            completed:false
        },
        {
            id: '2',
            type: 'Apple',
            completed:false
        }
    ],
    completed: 0,
    pending:2
}


interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [ todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  return (
      <TodoContext.Provider value={{todoState}}>
          {children}
      </TodoContext.Provider>
  )
}

export default TodoProvider