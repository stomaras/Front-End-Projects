import React, { useEffect, useState } from 'react'
import { IUser } from './models/models';
import UseFetchPerson from './customHooks/UseFetchPerson';


const url = "https://api.github.com/users/QuincyLarson";


const MultipleRetursFetchData = () => {


    const {isError, isLoading, user} = UseFetchPerson(url);


    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>There was an error...</h2>
    }

  return <div>
    <img style={{width:'150px', borderRadius:'24px'}} src={user?.avatar_url} alt={user?.name} />
    <h2>{user?.name}</h2>
    <h4>works at {user?.company}</h4>
    <p>{user?.bio}</p>
  </div>
};

export default MultipleRetursFetchData