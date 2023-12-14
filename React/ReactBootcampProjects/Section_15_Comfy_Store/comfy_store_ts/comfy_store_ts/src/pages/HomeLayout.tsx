import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar, Loading } from '../components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "../styles/global";
import ThemeContext from '../contexts/ThemeContext';
import { darkTheme, lightTheme } from '../styles/themes';
import { useThemeMode } from '../hooks/useThemeMode';
import { useNavigation } from 'react-router-dom';


const HomeLayout = () => {

  const {theme, themeToggler} = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme: darkTheme

  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <Header/>
        <Navbar themeToggler={themeToggler}/>
        {isPageLoading ? (
          <Loading/>
        ):(
          <section className='align-element py-20'>
            <Outlet/>    
          </section>
        )}
      </ThemeProvider>
    </ThemeContext>
  );
}

export default HomeLayout;