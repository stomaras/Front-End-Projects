import { useRef } from "react";
import classes from "./NewTodo.module.css"

export interface NewTodoProps {
    onAddTodo:(enteredText:string) => void;
}

const NewTodo = (props:NewTodoProps) => {

    const toDoTextInputRef = useRef<HTMLInputElement>(null);


    const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredText = toDoTextInputRef.current!.value

        if(enteredText.trim().length === 0){
            // throw an error
            return;
        }

        props.onAddTodo(enteredText);

    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={toDoTextInputRef}/>
        <button>Add Todo</button>
    </form>
};

export default NewTodo;