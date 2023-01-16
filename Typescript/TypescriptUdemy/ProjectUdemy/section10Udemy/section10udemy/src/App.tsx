import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/MainHeader/Navigation';
import { Login } from './components/Login/Login';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Home } from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
    
  );
}

export default App;

/*
Handling side effects with the useEffect() Hook
useEffect(() => {...}, [dependencies]);
- A function that should be executed after every component evaluation if the specified dependencies changed 
- 

We need to store somewhere in order to persists the reload.

*/
