import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log";

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  
  const handleSelectSquare = () => {
    setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X');
    setGameTurns();
  }

  return (
    <main>
      <div id="game-container">
        
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
