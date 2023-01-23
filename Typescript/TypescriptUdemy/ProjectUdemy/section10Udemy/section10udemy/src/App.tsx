import React, { useState, useEffect, useReducer, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/MainHeader/Navigation';
import { Login } from './components/Login/Login';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Home } from "./components/Home/Home";
import {AuthContext} from './store/auth-context';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  },[]);


  const loginHandler = (email: string, password: any) => {
    // store piece of information in the browser storage , most common storage for the 
    // browser would be cookies or local storage.
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn, setIsLoggedIn}}>
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
  );
}

export default App;

/*
Handling side effects with the useEffect() Hook
useEffect(() => {...}, [dependencies]);
- A function that should be executed after every component evaluation if the specified dependencies changed 
- 

We need to store somewhere in order to persists the reload.

-------------------------------------Understanding useReducer()---------------------------------------------------------
useReducer() can be used as a replacment for useState() if you need "more powerful state management"

we use useReducer when we have state update which depends on other states.
we use useReducer when we have state that belongs together such as the value and the validity of the value

const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

state = the latest state snapshot , is a state management mechanism
dispatchFn = can be used to dispatch a new action (i.e trigger an update of the state), instead of just setting a new state value, 
             you will dispatch an action. and that action will be consumed by the first argument you pass to useReducer function
reducerFn = A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state
            snapshpot and should return the new, updated state.
            (prevState, action) => newState
initialState = the initial state
initFn = A function to set the initial state programatically.

------------------------useReducer vs useState-------------------------------

useState: The main state management tool
          Great for independent pieces of state/data
          Great if state updates are easy and limited to a few kinds of updates

useReducer: Great if you need "more power"
            should be considered if you have related pieces of state/data
            can be helful if you have more complex state updates / actions   
*/
