import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {store} from "../src/state";
import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';

function App() {
  const [count, setCount] = useState(0)

  return <Provider store={store}>
    <div>
      <h1>Search For A Package</h1>
      <RepositoriesList/>
    </div>
  </Provider>
}

export default App
