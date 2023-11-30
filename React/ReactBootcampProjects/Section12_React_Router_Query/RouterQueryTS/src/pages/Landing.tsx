import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { IDrink } from '../models/models';
import CockailList from '../components/CockailList';

export interface LoaderObject {
  drinks:IDrink[];
  searchTerm:string;
}

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () :Promise<LoaderObject> => {
  const searchTerm = 'margarita'
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response);
  

  return {drinks:response.data.drinks, searchTerm:searchTerm};
}

const Landing = () => {

  const {drinks, searchTerm} = useLoaderData()
  console.log(drinks,searchTerm);
  return (
    <CockailList drinks={drinks}/>
    
  )
}

export default Landing