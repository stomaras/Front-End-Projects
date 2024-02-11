import React from 'react'
import Todo from '../models/todo'

const TodoItem = (props:Todo) => {
  return (
    <li key={props.id}>
        {props.text}
    </li>
  )
}

export default TodoItem