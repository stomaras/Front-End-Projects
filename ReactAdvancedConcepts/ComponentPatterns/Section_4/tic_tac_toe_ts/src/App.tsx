import './App.css'
import "./index.css"
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? '0':'X');
  }

  return (
    <>
      <main>
        <div className="game-container">
          <ol id='players' className="highlight-players">
            <Player initialName={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'}/>
            <Player initialName={'Player 2'} symbol={'O'} isActive={activePlayer === '0'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
        Log
      </main>
    </>
  )
}

export default App
