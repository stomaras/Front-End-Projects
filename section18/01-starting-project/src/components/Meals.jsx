import React, { useEffect } from 'react'
import { useState } from 'react';
import MealItem from './MealItem';

const Meals = () => {

    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {

            try{
                const response = await fetch('http://localhost:3000/meals');
    
                if(!response.ok){
                    //
                }
        
                const meals = await response.json();
                setLoadedMeals(meals);
            }catch(error){
                console.log("error");
            }
        }

        fetchMeals();
    },[loadedMeals]);

  return (
    <ul id='meals'>
        {loadedMeals.length > 0 && loadedMeals.map((meal) => {
            return (
                <MealItem
                    key={meal.id}
                    meal={meal}
                />
            )
        })}
    </ul>
  )
}

export default Meals