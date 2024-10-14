import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <div classNameonClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
