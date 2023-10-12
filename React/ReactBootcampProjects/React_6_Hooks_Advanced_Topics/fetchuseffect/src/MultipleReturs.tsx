import React, { useEffect, useState } from 'react'

const url = "https://api.github.com/users/QuincyLarson";

interface User {
    avatar_url:string;
    bio:string;
    blog:string;
    company:string;
    name:string;
    created_at:string;
}

const MultipleReturs = () => {
    const [user,setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchUser = async() => {
            try{
                setIsLoading(true);
                const resp = await fetch(url);
                if(!resp.ok){
                    setIsError(true);
                    setIsLoading(false);
                }
                const user = await resp.json();
                console.log(resp);
                setUser(user);
            }catch(error){
                setIsError(true);
            }
            setIsLoading(false);
        }
        fetchUser();
    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>There was an error...</h2>
    }


  return (
    <div>
        <img style={{width:'150px', borderRadius:'25px'}} src={user?.avatar_url} alt={user?.name} />
        <h2>{user?.name}</h2>
        <h4>works at {user?.company}</h4>
    </div>
  )
}

export default MultipleReturs