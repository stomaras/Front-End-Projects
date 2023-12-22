import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, Footer } from '../components'
import { Navbar, Sidebar } from '../components'
import { Outlet } from 'react-router-dom'


const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>  
      <Outlet/>  
      <Footer/>
    </>

  )
}

export default HomePage
