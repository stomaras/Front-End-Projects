import React from 'react'
import { useState, useEffect } from 'react';

import useInput from '../hooks/use-input';

export const SimpleInput = (props:any) => {
    const {
        value: enteredNamee,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        valueInputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value: string) => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        valueInputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput((value: string) => value.includes("@"));
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    //const [enteredEmail, setEnteredEmail] = useState('');
    
    //const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    //const enteredEmailIsValid = enteredEmail.includes('@');
    //const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEnteredName(event.target.value);
    // }

    // const nameInputBlurHandler = (event: React.FocusEvent<HTMLElement>) => {
    //     setEnteredNameTouched(true);
    // }

    // const emailInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEnteredEmail(event.target.value);
    // }

    // const emailInputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    //     setEnteredEmailTouched(true);
    // }

    const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // setEnteredNameTouched(true);
        // setEnteredEmailTouched(true);

        if(!enteredNameIsValid || !enteredEmailIsValid) {
            return false;
        } else {
                // Reset After Submission!
            resetNameInput();
            resetEmailInput();
        }
        
    };


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredNamee}/>
            {nameInputHasError && <p>Name must not be empty.</p>}
          </div>
          <div className={emailInputClasses}>
              <label htmlFor='email'>Your E-mail</label>
              <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
              {emailInputHasError && <p>Pleased Entered a valid e-mail.</p>}
          </div>
        <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput;