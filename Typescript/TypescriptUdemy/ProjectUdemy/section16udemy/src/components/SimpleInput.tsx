import React from 'react'
import { useRef, useState, useEffect } from 'react';

export const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if(enteredNameIsValid) {
            console.log('Name Input is valid!');
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value)
    }

    const nameInputBlurHandler = (event: React.FocusEvent<HTMLElement>) => {
        setEnteredNameTouched(true);
        if(enteredName.trim() == '') {
            setEnteredNameIsValid(false);
            return;
        }

    }

    const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if(enteredName.trim() == '') {
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        setEnteredName('');
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
            {nameInputIsInvalid && <p>Name must not be empty.</p>}
        </div>
        <div className='form-actions'>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput;