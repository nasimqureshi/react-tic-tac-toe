
import './App.css';
import { useState } from 'react';
import Square from './components/Square';

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  
  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => {alert(0)}} />
        </div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;