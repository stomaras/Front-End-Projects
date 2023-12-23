import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserDetails = () => {

    const {user} = useContext(UserContext);



  return (
    <>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p>
    </>

  )
}

export default UserDetails