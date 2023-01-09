import React from 'react'
import useInput from '../hooks/use-input';


const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.includes('@');

export const BasicForm = (props: any) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        valueInputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        valueInputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        valueInputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);

    let formIsValid = false;

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
            return false;
        } else {
            console.log('Submitted !!!');
            console.log(enteredFirstName, enteredLastName, enteredEmail);
            // Reset After Submission!
            resetFirstNameInput();
            resetLastNameInput();
            resetEmailInput();
        }   
    };

    const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
        <div className='control-group'>
            <div className={firstNameInputClasses}>    
                <label htmlFor='name'>First Name</label>
                  <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName} />
                  {firstNameHasError && <p className='error-text'>First Name must not be empty</p>}
            </div>
            <div className={lastNameInputClasses}>
                <label htmlFor='name'>Last Name</label>
                <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName} />
                {lastNameHasError && <p className='error-text'>Last Name must not be empty</p>}  
            </div>
        </div>
        <div className={emailInputClasses}>  
            <label htmlFor='name'>E-mail Address</label>
            <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
            {emailInputHasError && <p className='error-text'>E-mail must contain @ character</p>}  
        </div>
        <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  );
};
