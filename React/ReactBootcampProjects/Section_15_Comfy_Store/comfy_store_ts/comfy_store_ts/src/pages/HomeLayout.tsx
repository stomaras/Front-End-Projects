import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "../styles/global";
import ThemeContext from '../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../styles/themes';
import { useThemeMode } from '../hooks/useThemeMode';

const HomeLayout = () => {

  const {theme, themeToggler} = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme: darkTheme

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <Header/>
        <Navbar themeToggler={themeToggler}/>
        <section className='align-element py-20'>
            <Outlet/>    
        </section>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default HomeLayout;