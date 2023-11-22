import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Starter from './components/Starter'
import { useGlobalContext, useSidebarContext } from './context/Context'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'


function App() {
  const [count, setCount] = useState(0)
  const {isSidebarOpen} = useGlobalContext()

  return (
    <main>
        <Navbar/>
        <Hero/>
        <Sidebar/>
        <Submenu/>
    </main>
  )
}

export default App


