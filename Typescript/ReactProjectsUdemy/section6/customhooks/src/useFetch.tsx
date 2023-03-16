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

const useFetch = (url:string) => {
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<User>(MyUser);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                }
                const response = await resp.json();
                setData(response);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        };
        fetchData();
    },[]);

    return { isLoading, isError, data };
}

export default useFetch;