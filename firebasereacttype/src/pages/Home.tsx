import React from 'react'
import { homeClasses } from './Home/homeClasses'

const Home = () => {

    const {container, cardContainer, title, description} = homeClasses

  return (
    <>
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