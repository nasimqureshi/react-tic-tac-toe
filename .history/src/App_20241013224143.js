
import './App.css';
import { useState } from 'react';
import Square from './components/Square';
import { Patterns } from './Patterns';

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("X")
  const [result]
  
  const chooseSquare = (square) =>{
      setBoard(board.map((val, index) => {
        if(index === square && val === ""){
          return player
        }
        return val
      }))
      if(player === "X"){
        setPlayer("O");
      } else {
        setPlayer("X");
      }
  }

  const checkWin =() =>{
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currentPattern[0]];
      let foundWinningPattern = true;
      currentPattern.forEach((index) => {
        if(board[index] !== firstPlayer){
          foundWinningPattern = false;
        }
      })
      if(foundWinningPattern) {

      }
    })
  }

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}} />
          <Square val={board[1]} chooseSquare={() => {chooseSquare(1)}} />
          <Square val={board[2]} chooseSquare={() => {chooseSquare(2)}} />
        </div>
        <div className='row'>
          <Square val={board[3]} chooseSquare={() => {chooseSquare(3)}} />
          <Square val={board[4]} chooseSquare={() => {chooseSquare(4)}} />
          <Square val={board[5]} chooseSquare={() => {chooseSquare(5)}} />
        </div>
        <div className='row'>
          <Square val={board[6]} chooseSquare={() => {chooseSquare(6)}} />
          <Square val={board[7]} chooseSquare={() => {chooseSquare(7)}} />
          <Square val={board[8]} chooseSquare={() => {chooseSquare(8)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
