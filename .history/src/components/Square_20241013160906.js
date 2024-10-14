import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <div className="squaronClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
