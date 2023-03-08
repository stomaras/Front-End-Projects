import React from "react";
import avatar from '../../../assets/default-avatar.svg';

export function Person({name, nickName})
{
  return (
    <div>
      <h4>{name}</h4>
      <p>Nick Name: {nickName || 'some kind'}</p>
    </div>
  );
}

export default Person;
  