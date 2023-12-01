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


const getValidIngredients = (drink:IDrink) => {
  const KeysIngredients = Object.keys(drink)
  const ValuesIngredients = Object.values(drink);
  let ingredients = []
  for(let i=0; i<=KeysIngredients.length-1; i++){
    if(KeysIngredients[i].startsWith('strIngredient')){
      ingredients.push(ValuesIngredients[i])
    }
  }

  let validIngredients = ingredients.filter((ingredient) => ingredient !== null);
  return validIngredients; 
}

export const loader = async(data:any) => {
  const {params} = data;
  const {id} = params;
  const response = await axios.get(`${singleCocktailUrl}${params.id}`);
  let singleDrink = response.data.drinks[0];
  return {id, singleDrink};
}

const Cocktail = () => {
  const {id, singleDrink} = useLoaderData() as CocktailDetails;
  
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory:category,
    strGlass:glass,
    strInstructions: instructions,
  } = singleDrink;

  let validIngredients = getValidIngredients(singleDrink);
  console.log(validIngredients);
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
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return <span className='ing' key={index}>{item}{index < validIngredients.length -1 ? ',': ''}</span>
            })}
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