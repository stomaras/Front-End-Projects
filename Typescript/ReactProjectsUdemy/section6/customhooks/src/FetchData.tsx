import React from 'react'
import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson';

const FetchData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url);
                const user = await resp.json();
                setUser(user);
                console.log(user);
            } catch (error) {
                setIsError(true);
                
            }
            setIsLoading(false);
        };
        fetchUser();
    },[]);

    if (isLoading) {
        return <h2>Loading ...</h2>
    }

    if (isError) {
        return <h2>Error ...</h2>
    }

  return (
      <div>
          <h2>Fetch Data</h2>
    </div>
  )
}

export default FetchData;