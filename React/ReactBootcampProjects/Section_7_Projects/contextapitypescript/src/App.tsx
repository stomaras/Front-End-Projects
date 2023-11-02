import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './context/UserContext'

const UserDetails = () => {
  return (
    <>
    <p>User Name: </p>
    <p>User Email: </p>
    </>

  )
}

const AnotherComponent = () => {
  return <>
    <p>Another Component</p>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <UserDetails></UserDetails>
      <AnotherComponent/>
    </UserProvider>
  )
}

export default App
