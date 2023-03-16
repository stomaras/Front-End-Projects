import React from 'react'

import useFetch from './useFetch';
const url = 'https://api.github.com/users/QuincyLarson';

const FetchData = () => {

    const {isLoading, isError , data: user} = useFetch(url)

    if (isLoading) {
        return <h2>Loading ...</h2>
    }

    if (isError) {
        return <h2>Error ...</h2>
    }

  return (
      <div>
          <img style={{ width: '150px', borderRadius: '25px' }} src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <h4>works at {user.company}</h4>
    </div>
  )
}

export default FetchData;


/*
    Challenge
    - App.jsx import fetch-data
    - take a look at the component
    - try to set up custom fetch hook
    - hint:
      hook should return isLoading, isError, user and take url as parameter
*/

