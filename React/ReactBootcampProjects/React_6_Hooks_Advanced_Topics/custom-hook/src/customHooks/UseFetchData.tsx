import React, { useEffect, useState } from 'react'
import { IUser } from '../models/models';

/* when we create custom hook we do not have props but variables instead  */

const UseFetch = (url:string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<IUser | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                if(!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const response = await resp.json();
                
                console.log(response);
                setData(response);
            }catch(error) {
                setIsError(true);
                console.log(error);
            }       
            setIsLoading(false);
        }
        fetchData();    
    },[])


  return {isLoading, isError, data};
}

export default UseFetch