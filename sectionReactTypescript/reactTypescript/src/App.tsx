import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Todo from './models/todo'
import NewTodo from './components/NewTodo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text:string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (id:any) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    });
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </>
  )
}

export default App
