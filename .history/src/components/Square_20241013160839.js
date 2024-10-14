import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <div onClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
