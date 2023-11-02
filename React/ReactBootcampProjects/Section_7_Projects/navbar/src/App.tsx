import { useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from "./assets/react.svg";

import './App.css'
import { ILink } from './models';
import Navbar from './Navbar';

function App() {

  return ( 
  <Navbar/>
  )
}

export default App;
