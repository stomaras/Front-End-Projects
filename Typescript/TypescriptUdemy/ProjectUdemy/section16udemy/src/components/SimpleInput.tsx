import React from 'react'
import { useState, useEffect } from 'react';

export const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = false;

    if(enteredNameIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = (event: React.FocusEvent<HTMLElement>) => {
        setEnteredNameTouched(true);
    }

    const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if(!enteredNameIsValid) {
            return;
        }
        setEnteredName('');
        setEnteredNameTouched(false);
    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
            {nameInputIsInvalid && <p>Name must not be empty.</p>}
        </div>
        <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput;