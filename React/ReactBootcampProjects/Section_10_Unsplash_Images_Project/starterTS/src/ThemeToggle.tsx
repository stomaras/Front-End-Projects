import React from 'react'
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";
import useTheme from './hooks/useTheme';

const ThemeToggle = () => {

    const {isDarkTheme, toggleDarkTheme} = useTheme();

    const handle = (e:React.MouseEvent<HTMLButtonElement>) => {
        toggleDarkTheme();
        console.log("efh");
    }

  return (
    <section className='toggle-container'>
        <button className="dark-toggle" onClick={handle}>
            {
                isDarkTheme ? (
                    <BsFillMoonFill className="toggle-icon"/>
                ):(
                    <BsFillSunFill className="toggle-icon"/>
                )
            }
        </button>
    </section>
  )
}

export default ThemeToggle