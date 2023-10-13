import React, { useState } from 'react'

interface User {
    name:string;
}

const UserChallenge = () => {

    const [user, setUser] = useState<User | null>(null);

    const login = () => {
        // normally connect to db or api
        setUser({name:"Spyros"})
    }

    const logout = () => {
        setUser(null);
    };

  return <>
    {user ? (
    <div>
        <h4>hello there, {user.name}</h4>
        <button className='btn' onClick={logout}>Logout</button>
    </div>        
    ):(
        <div>
        <h4>Please Login</h4>
        <button className='btn' onClick={login}>Login</button>
    </div>  
    )
    }

  </>
}

export default UserChallenge