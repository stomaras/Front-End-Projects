import React, { useState, useEffect } from 'react'

const url = "https://api.github.com/users";

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const users = await response.json();
                console.log(users);
                setUsers(users);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[]);

  return (
    <section className='users-section'>
        <h3>Gihub users</h3>
        <ul className="users">
            {users.map((user) => {
                const {id, login, avatar_url, html_url} = user
                return (
                <li key={id} className='user-li'>
                    <img src={avatar_url} alt={html_url} className='user-li-img'/>
                    <div className='user-info'>
                        <h5 className='user-info__p'>{login}</h5>
                        <a href={html_url} className='user-info__href'></a>
                    </div>
                </li>
                )
            })}
        </ul>
    </section>
  )
}

export default FetchData