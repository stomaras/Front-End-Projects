import React from 'react'
import { useState, useEffect } from 'react';

export const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = (event: React.FocusEvent<HTMLElement>) => {
        setEnteredNameTouched(true);
    }

    const emailInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(event.target.value);
    }

    const emailInputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setEnteredEmailTouched(true);
    }

    const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if(!enteredNameIsValid && !enteredEmailIsValid) {
            return false;
        } else {
                // Reset After Submission!
            setEnteredName('');
            setEnteredNameTouched(false);
            setEnteredEmail('');
            setEnteredEmailTouched(false);
        }
        
    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
            {nameInputIsInvalid && <p>Name must not be empty.</p>}
          </div>
          <div className={emailInputClasses}>
              <label htmlFor='email'>Your E-mail</label>
              <input type="email" id="email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
              {emailInputIsInvalid && <p>Pleased Entered a valid e-mail.</p>}
          </div>
        <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  )
}

export default SimpleInput;