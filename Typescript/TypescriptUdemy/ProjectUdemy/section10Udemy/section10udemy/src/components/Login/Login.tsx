import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { act } from 'react-dom/test-utils';
import { ActionType } from './actions-types';
import { Action, UserInputAction } from "./actions/index";
import { InputState } from './state';
import Input from '../UI/Input/Input';

const initialState = {
  value: '',
  isValid: false,
}

const emailReducer = (state:any, action: Action) => {
  switch (action.type) {
    case ActionType.USER_INPUT:
      return {
        value: action.val,
        isValid: action.val.includes("@")
      }
    case ActionType.INPUT_BLUR:
      return {
        value: state.value,
        isValid: state.value.includes("@")
      }
    default:
      return {
        initialState
      }
  }
}

const passwordReducer = (state: any, action: Action) => {
  switch (action.type) {
    case ActionType.USER_INPUT:
      return {
        value: action.val,
        isValid: action.val.trim().length > 6
      }
    case ActionType.INPUT_BLUR:
      return {
        value: state.value,
        isValid: state.value.trim().length > 6
      }
    default:
      return {
        initialState
      }
  }
}

export const Login = (props:any) => {

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState(false);
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialState);
    
  // useEffect(() => {
  //   console.log("EFFECT RUNNING")

  //   return () => {
  //     console.log('EFFECT CLEAN UP');
  //   };
  // },[enteredEmail]);

  const { isValid: emailIsValid } = emailState; 
  const { isValid: passwordIsValid } = passwordState;

  const emailInputRef = useRef<any>();
  const passwordRef = useRef<any>();
   
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        passwordState?.isValid  && emailState.isValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  
    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatchEmail({
        type: 'USER_INPUT', val: event.target.value,
      });

      // setFormIsValid(
      //   passwordState?.isValid && emailState.value.includes('@')
      // );
    };
  
  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({
      type: 'USER_INPUT', val: event.target.value,
    });
      // setFormIsValid(
      //   passwordState?.isValid && emailState.value.includes('@')
      // );
    };
  
    const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
    };
  
    const validatePasswordHandler = () => {
        dispatchPassword({type:'INPUT_BLUR'})
    };
  
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formIsValid) {
        props.onLogin(emailState.value, passwordState?.value);
      } else if (!emailIsValid) {
        emailInputRef.current.focus();
      } else {
        passwordRef.current.focus();
      }
    };



  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id="email" label="E-mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        <Input ref={passwordRef} id="password" label="Password" type="password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}


