import React from 'react'
import { IDrink } from '../models/models'
import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

export interface CocktailListProps {
    drinks:IDrink[];
}

const CockailList = (props:CocktailListProps) => {
    const {drinks} = props;
    console.log(drinks);
    if(!drinks){
        return (
            <h4 style={{textAlign:'center'}}>No matching Cocktails found...</h4>
        )
    }

    const formattedDrinks = drinks.map((drink) => {
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
        return {id:idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic, glass:strGlass};
    })
  return (
    <Wrapper>
        {formattedDrinks.map((item) => {
            return  <CocktailCard key={item.id} {...item}/>
        })}
    </Wrapper>
  )
}

export default CockailList