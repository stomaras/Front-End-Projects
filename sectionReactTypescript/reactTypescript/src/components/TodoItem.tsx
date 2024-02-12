import React from 'react'
import Todo from '../models/todo'
import classes from "./TodoItem.module.css"

export interface TodoItemProps {
  id:any;
  text:string;
  
  onRemoveTodo: () => void
}

const TodoItem = (props:TodoItemProps) => {
  return (
    <li key={props.id} className={classes.item} onClick={props.onRemoveTodo}>
        {props.text}
    </li>
  )
}

export default TodoItem