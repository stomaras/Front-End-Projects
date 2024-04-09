import './App.css'
import "./index.css"

function App() {

  return (
    <>
      <main>
        <div className="game-container">
          <ol className="players">
            <li>
              <span className='player-name'>Player 1</span>
              <span className='player-symbol'>X</span>
            </li>
            <li>
              <span className='player-name'>Player 2</span>
              <span className='player-symbol'>0</span>
            </li>
          </ol>
          Game Board
        </div>
        Log
      </main>
    </>
  )
}

export default App
