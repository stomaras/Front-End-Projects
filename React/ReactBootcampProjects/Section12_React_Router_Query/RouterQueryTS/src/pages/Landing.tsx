import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'


const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita'
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);
  return 'something'
}

const Landing = () => {

  const data = useLoaderData()
  console.log(data);
  return (
    <div>Landing</div>
  )
}

export default Landing