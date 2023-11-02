import React, { useEffect, useState } from 'react'
import { IUser } from './models/models';
import UseFetchPerson from './customHooks/UseFetchPerson';
import UseFetch from './customHooks/UseFetchData';


const url = "https://api.github.com/users/QuincyLarson";


const MultipleRetursFetchData = () => {


    const {isError, isLoading, data} = UseFetch(url);


    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>There was an error...</h2>
    }

  return <div>
    <img style={{width:'150px', borderRadius:'24px'}} src={data?.avatar_url} alt={data?.name} />
    <h2>{data?.name}</h2>
    <h4>works at {data?.company}</h4>
    <p>{data?.bio}</p>
  </div>
};

export default MultipleRetursFetchData