import React from 'react'
import { User } from '../models/models'

interface UserContainerProps {
    user?:User;
    logout: () => void;
}

const UserContainer = (props: UserContainerProps) => {

    const {user, logout} = props;

  return (
    <div className='user-container'>
        {user ? (
                <>
                    <p>Hello there, {user?.name?.toUpperCase()}</p>
                    <button className='btn' onClick={logout}>logout</button>        
                </>
        ): (
            <p>Please Login</p>
        )}   


    </div>
  )
}

export default UserContainer