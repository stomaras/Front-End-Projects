import React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { IDrink } from '../models/models';
import CockailList from '../components/CockailList';
import SearchForm from '../components/SearchForm';

export interface LandingObject {
  drinks:IDrink[];
  searchTerm:string;
}

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({request}:any) :Promise<LandingObject> => {

  const url = new URL(request.url);
  

  const searchTerm = url.searchParams.get('search') || '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return {drinks:response.data.drinks, searchTerm:searchTerm};
}

const Landing = () => {

  const {drinks, searchTerm} = useLoaderData() as LandingObject;
  return (
    <>
      <SearchForm/>
      <CockailList drinks={drinks}/>
    </>
    
  )
}

export default Landing