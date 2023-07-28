import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './CakeContainer';
import { Provider } from "react-redux"
import store from './redux/store';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamContainer from './iceCreamContainer';
import NewCakeContainer from './NewCakeContainer';
import ItemContainer from './ItemContainer';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <ItemContainer cake/>
          <IceCreamContainer/>
          <HooksCakeContainer></HooksCakeContainer>
          <CakeContainer/>
          <IceCreamContainer></IceCreamContainer>
          <NewCakeContainer></NewCakeContainer>
        </div>
    </Provider>

  );
}

export default App;