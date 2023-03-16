import React from 'react'
import { useEffect, useState } from 'react'

interface User {
    avatar_url: string;
    name: string;
    company: string;
}

const MyUser: User = {
    avatar_url: '',
    name: '',
    company:''
};

const useFetchPerson = (url:string) => {
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState<User>(MyUser);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                }
                const user = await resp.json();
                setUser(user);
                console.log(resp);
                console.log(user);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        };
        fetchUser();
    },[]);

  return {isLoading, isError, user}
}

export default useFetchPerson