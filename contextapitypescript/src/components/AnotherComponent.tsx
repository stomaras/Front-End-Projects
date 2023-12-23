import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'

const AnotherComponent = () => {
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        setUser({
            name:'Spyros Tom',
            email:'sptoma724@gmail.com'
        })
    },[]);

    
  return (
    <div>AnotherComponent</div>
  )
}

export default AnotherComponent