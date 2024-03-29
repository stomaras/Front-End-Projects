import React from 'react'
import { useGlobalContext } from './context'
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";

const ThemeToggle = () => {

    const {isDarkTheme, toggleDarkTheme } = useGlobalContext()

    const handleClick = () => {
        toggleDarkTheme()
    }

  return (
    <section className='toggle-container'>
        <button className='dark-toggle' onClick={handleClick}>
            {isDarkTheme ? (
                <BsFillMoonFill className="toggle-icon"/>
            ):(
                <BsFillSunFill className="toggle-icon"/>
            )}
        </button>
    </section>
  )
}

export default ThemeToggle