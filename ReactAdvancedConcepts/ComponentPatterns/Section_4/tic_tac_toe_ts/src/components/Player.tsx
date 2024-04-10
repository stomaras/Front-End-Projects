import React from 'react'
import { useState } from 'react';

export interface PlayerProps {
    initialName: string;
    symbol: string;
}

const Player = ({initialName, symbol}:PlayerProps) => {

    const [player, setPlayer] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        setPlayer(event.target.value);
    }

    let playerName = <span className='player-name'>{player}</span>;

    if(isEditing){
        playerName = <input type='text' value={player} onChange={handleChange} required/>
    }

  return (
    <li>
        <span className='player'>
            {playerName}
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save':'Edit'}</button>
    </li>
  )
}

export default Player