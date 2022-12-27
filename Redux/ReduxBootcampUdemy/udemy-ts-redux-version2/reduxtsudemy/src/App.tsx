import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import {useSelector} from "react-redux";
import Header from './components/Header';
import {Auth} from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { AuthState } from './state/reducers/authReducer';


function App() {

  const isAuth = useSelector((state: any) => state.auth.isAuth);


  return (
    <div className="App">
      <Fragment>
        <Header/>
        {!isAuth && <Auth/>}
        {isAuth && <UserProfile/>}
        <Counter/>
      </Fragment>
      
    </div>
  );
}

export default App;
