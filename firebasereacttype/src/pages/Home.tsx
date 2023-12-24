import React from 'react'
import { homeClasses } from './Home/homeClasses'
import Header from '../components/Header/Header'

const Home = () => {

    const {container, cardContainer, title, description} = homeClasses

  return (
    <>
        <Header/>
        <div className={container}>
            <div className={cardContainer}>
                <h5 className={title}>Firebase Auth</h5>
                <p className={description}>Master Complete Auth in firebase</p>
            </div>
        </div>
    </>
  )
}

export default Home