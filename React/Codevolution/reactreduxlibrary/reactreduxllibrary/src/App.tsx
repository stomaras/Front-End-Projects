import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './CakeContainer';
import { Provider } from "react-redux"
import store from './redux/store';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamContainer from './iceCreamContainer';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <HooksCakeContainer></HooksCakeContainer>
          <CakeContainer/>
          <IceCreamContainer></IceCreamContainer>
        </div>
    </Provider>

  );
}

export default App;