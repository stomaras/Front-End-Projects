import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useAppSelector, useAppDispatch } from './store'

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  return (
  <>
    <Header/>
    {!isAuth && <Auth/>}
    {isAuth && <UserProfile/>}
    <Counter/>
  </>
  )
}

export default App
