import { useRef } from "react";
const NewTodo = () => {

    const toDoTextInputRef = useRef<HTMLInputElement>(null);


    const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredText = toDoTextInputRef.current!.value

        if(enteredText.trim().length === 0){
            // throw an error
            return;
        }

        
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={toDoTextInputRef}/>
        <button>Add Todo</button>
    </form>
};

export default NewTodo;