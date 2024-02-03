import React, { useState, useRef } from "react";

export default function Player() {
  
  const [enteredPlayerName, setEnteredPlayerName] = useState<string | undefined>('');
  const playerName = useRef<HTMLInputElement | null>(null);

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setEnteredPlayerName(playerName.current?.value);
    if(playerName.current){
      playerName.current.value = '';
    }
  }
  
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
