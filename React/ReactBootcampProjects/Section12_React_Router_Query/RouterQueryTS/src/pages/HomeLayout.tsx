import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div>
        <Navbar/>
        <section>
        {isPageLoading ? (
          <div className='loading'></div>
        ):(
          <Outlet/>
        )}
        </section>
    </div>
  )
}

export default HomeLayout