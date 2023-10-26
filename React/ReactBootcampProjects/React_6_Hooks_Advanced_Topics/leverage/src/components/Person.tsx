import React from "react";
import avatar from "../logo.svg"
import { IPeople } from "../models/models";

interface PersonProps {
    person: IPeople;
}

export const Person = (props:PersonProps) => {
    const {person} = props;
    let image = person.images && person.images[0] && person.images[0].small && person.images[0].small.url;

    const img = person.images?.[0]?.small?.url || avatar;

  return <div key={person.id}>
        <img src={img} alt={person.name} style={{width:'50px'}} />
        <h4>{person.name}</h4>
        <p>NickName: {person.nickName ?? ' fixed nickname'}</p>
    </div> 
}
  