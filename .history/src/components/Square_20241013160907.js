import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <div className="squareonClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
