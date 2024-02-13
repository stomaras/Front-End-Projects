import React, {useContext} from 'react'
import Todo from '../models/todo'
import { TodosContext } from '../store/todos-context'
import TodoItem from './TodoItem'
import classes from "./TodoItem.module.css"

const Todos: React.FC = () => {
  
  const todosCTX = useContext(TodosContext)

  return (

    <ul className={classes.list}>
        {todosCTX.items.map((item) => {
            return (
                <TodoItem 
                  id={item.id} 
                  text={item.text} 
                  onRemoveTodo={todosCTX.removeTodo.bind(null, item.id)}/>
            )
        })}
    </ul>
  )
}

export default Todos

// bind is an default method in javascript which allows us to pre-configure a function
// for future execution