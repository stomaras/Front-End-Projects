import React, { useState } from 'react'


const initialGameBoard:any = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const GameBoard = () => {

   const [gameBoard, setGameBoard] = useState(initialGameBoard);

   function handleSelectSquare(rowIndex:any, colIndex:any, ) {
    setGameBoard((prevGameBoard:any) => {
        const updatedBoard = [...prevGameBoard.map((innerArray:any) => [...innerArray])];
        updatedBoard[rowIndex][colIndex] = 'X';
        return updatedBoard;
    });
   }

  return (
    <ol id='game-board'>
        {gameBoard.map((row:any, rowIndex:any) => <li key={rowIndex}>
            <ol>
                {
                    row.map((cell:any, cellIndex:any) => <li key={cellIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>{cell}</button>
                    </li>
                )}
            </ol>
        </li>
        )}
    </ol>
  )
}

export default GameBoard