
import { Provider } from 'react-redux';
import './App.css'
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import {store} from "../src/state/store";

function App() {

  return <Provider store={store}>
      <Navbar/>
      <CartContainer/>
  </Provider>
}

export default App
