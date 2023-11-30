import React from 'react'
import {useLoaderData, Link}  from "react-router-dom";
import Wrapper from '../assets/wrappers/CocktailPage';
import { IDrink } from '../models/models';
import axios from 'axios';

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

interface CocktailDetails {
  id:number;
  drinks:IDrink[];
}


export const loader = async(data:any) => {
  console.log(data);
  const {params} = data;
  const {id} = params;
  const response = await axios.get(`${singleCocktailUrl}${params.id}`);
  let drinks = response.data;
  return {id, drinks};
}

const Cocktail = () => {
  const {id, drinks} = useLoaderData() as CocktailDetails;
  return (
    <div>Cocktail</div>
  )
}

export default Cocktail