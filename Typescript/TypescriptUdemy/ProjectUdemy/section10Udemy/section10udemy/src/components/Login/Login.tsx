import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


export const Login = (props:any) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    
  // useEffect(() => {
  //   console.log("EFFECT RUNNING")

  //   return () => {
  //     console.log('EFFECT CLEAN UP');
  //   };
  // },[enteredEmail]);
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.trim().length > 6 && enteredEmail.includes('@')
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
  
    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredEmail(event.target.value);
    };
  
    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredPassword(event.target.value);
    };
  
    const validateEmailHandler = () => {
        if (enteredEmail.includes('@')) {
            setEmailIsValid(true);
        } else {
            setEmailIsValid(false);
        }
    };
  
    const validatePasswordHandler = () => {
        if (enteredPassword.trim().length > 6) {
            setPasswordIsValid(true);
        } else {
            setPasswordIsValid(false);
        }
    };
  
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      props.onLogin(enteredEmail, enteredPassword);
    };



  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )

}


