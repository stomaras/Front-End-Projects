import React from 'react'
import { PlanetTravel } from '../models/models';

export interface PlaceTreeProps {
    key:number;
    id:number;
    parentId:number;
    placesById:any;
    onComplete:(parentId:number, childId:number) => void;
}

const PlaceTree = (props:PlaceTreeProps) => {

    const {key, id, parentId, placesById, onComplete} = props;
    const place:PlanetTravel = props.placesById[props.id];
    const childIds = place.childIds;

  return (
    <li>
    {place.title}
    <button onClick={() => {
      props.onComplete(props.parentId, props.id);
    }}>
      Complete
    </button>
    {childIds.length > 0 &&
      <ol>
        {childIds.map(childId => (
          <PlaceTree
            key={childId}
            id={childId}
            parentId={id}
            placesById={placesById}
            onComplete={onComplete}
          />
        ))}
      </ol>
    }
  </li>

  )
}

export default PlaceTree