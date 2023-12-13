import axios, {AxiosResponse} from 'axios'
import React, {  useState, useEffect } from 'react'
import {  IUsers } from '../models/models';
import { UsersService } from '../services/UserService';

export interface UsersContainer {
    users:IUsers[];
}

const UsersContainer = ({users}:UsersContainer) => {

    const [search, setSearch] = useState('');



  return (
    <div className='users'>
        <div className="search">
            <input type="search" onChange={(e) => setSearch(e.target.value)}/>
            <button type='button'>sort</button>
        </div>
        <div className="users-full">
            {users.filter((user) => {
                return search.toLowerCase() === '' 
                    ? user 
                    : user.name.toLowerCase().includes(search);
            }).map((user) => {
                    return (
                        <div className="userContainer" key={user.id}>
                        <article className='userContainer__article'>
                            <label htmlFor="">Name:</label>
                            <span>{user.name}</span>
                        </article>
                        <article className='userContainer__article'>
                            <label htmlFor="">Username:</label>
                            <span>{user.username}</span>
                        </article>
                        <article className='userContainer__article'>
                            <label htmlFor="">Email:</label>
                            <span>{user.email}</span>
                        </article>
                        <article className='userContainer__article'>
                            <label htmlFor="">City:</label>
                            <span>{user.address.city}</span>
                        </article>
                        <article className='userContainer__article'>
                            <label htmlFor="">Zip Code:</label>
                            <span>{user.address.zipcode}</span>
                        </article>
                        <article className='userContainer__article'>
                            <label htmlFor="">Phone:</label>
                            <span>{user.phone}</span>
                        </article>
                    </div>
                    )
                })
            }
            </div>
        </div>
  )
}

export default UsersContainer