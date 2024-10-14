import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <div conClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
