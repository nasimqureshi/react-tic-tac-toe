
import './App.css';
import { useState } from 'react';
import S

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  
  return (
    <div className="App">
      <div className='board'>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
