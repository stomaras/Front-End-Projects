import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'
import classes from "./TodoItem.module.css"

const Todos: React.FC<{items:Todo[], onRemoveTodo:(id:any) => void}> = (props) => {
  return (
    <ul className={classes.list}>
        {props.items.map((item) => {
            return (
                <TodoItem 
                  id={item.id} 
                  text={item.text} 
                  onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
            )
        })}
    </ul>
  )
}

export default Todos

// bind is an default method in javascript which allows us to pre-configure a function
// for future execution