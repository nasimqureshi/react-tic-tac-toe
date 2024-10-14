import React from 'react';

const Square = ({ val, chooseSquare }) => {
  return (
    <  onClick={chooseSquare}>
      {val}
    </>
  );
}

export default Square;
