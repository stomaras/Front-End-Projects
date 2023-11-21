import React, { useState } from 'react'
import {initialTravelPlan} from "../data/data"
import { PlanetTravel } from '../models/models';
import PlaceTree from './PlaceTree';

const TravelPlan = () => {
    const [plan, setPlan] = useState(initialTravelPlan);

    const handleComplete = (parentId:number, childId:number) => {
        const parent = plan[parentId];

        const nextParent:PlanetTravel = {
            ...parent,
            childIds: parent.childIds.filter((id) => id !== childId)
        };

        setPlan({
            ...plan,
            [parentId]:nextParent
        });
    }

    const root = plan[0];
    const planetIds = root.childIds;

  return (
    <>
        <h2>Places To Visit</h2>
        <ol>
            {planetIds.map((id) => {
                return <PlaceTree key={id} id={id} parentId={0} placesById={plan} onComplete={handleComplete}/>
            })}
        </ol>
    </>
  )
}

export default TravelPlan