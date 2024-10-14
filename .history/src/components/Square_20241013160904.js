import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <div className="squonClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
