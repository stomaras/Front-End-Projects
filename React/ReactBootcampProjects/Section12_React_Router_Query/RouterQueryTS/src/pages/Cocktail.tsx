import React from 'react'
import {useLoaderData, Link}  from "react-router-dom";
import Wrapper from '../assets/wrappers/CocktailPage';
import { IDrink } from '../models/models';
import axios from 'axios';

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

interface CocktailDetails {
  id:number;
  singleDrink:IDrink;
}


export const loader = async(data:any) => {
  console.log(data);
  const {params} = data;
  const {id} = params;
  const response = await axios.get(`${singleCocktailUrl}${params.id}`);
  let singleDrink = response.data.drinks[0];
  console.log(singleDrink);
  return {id, singleDrink};
}

const Cocktail = () => {
  const {id, singleDrink} = useLoaderData() as CocktailDetails;
  console.log(singleDrink);
  
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory:category,
    strGlass:glass,
    strInstructions: instructions,
  } = singleDrink;




  return (
    <Wrapper>
      <header>
        <Link to="/" className='btn'>back home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className='img' />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail