import React, { useEffect, useState } from 'react'
import { IUser } from '../models/models';

const UseFetchPerson = (url:string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url);
                if(!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await resp.json();
                
                console.log(user);
                setUser(user);
            }catch(error) {
                setIsError(true);
                console.log(error);
            }       
            setIsLoading(false);
        }
        fetchUser();    
    },[])


  return {isLoading, isError, user};
}

export default UseFetchPerson