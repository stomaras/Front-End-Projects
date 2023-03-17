import React from 'react'
import { Person } from './Navbar'

export interface UserContainerProps {
    user: Person | null,
    logout():void   
}

const UserContainer = ({user, logout}: UserContainerProps) => {
  return (
      <div className='user-container'>
          {user ? (
            <>
                <p>Hello there,  {user?.name?.toUpperCase()}</p>
                <button className='btn' onClick={logout}>logout</button>
              </> 
          ) : (
            <p>Please Login</p>       
          )}
    </div>
  )
}

export default UserContainer