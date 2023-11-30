import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

export interface CocktailCardProps {
    id:string | null;
    name:string;
    image:string; 
    info:string | null;
    glass:string | null;
}

const CocktailCard = ({image, name, id, info, glass}:CocktailCardProps) => {
  
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className='img'/>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className='btn'/>
      </div>
    </Wrapper>
  )
}

export default CocktailCard;