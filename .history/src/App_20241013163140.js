
import './App.css';
import { useState } from 'react';
import Square from './components/Square';

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  
  const chooseSquare = () =>{

  }

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => {chooseSquare(0)}} />
          <Square val={board[1]} chooseSquare={() => {chooseSquare()}} />
          <Square val={board[2]} chooseSquare={chooseSquare} />
        </div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
