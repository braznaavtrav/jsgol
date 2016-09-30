import React, { PropTypes } from 'react';

export const Alive = ({size}) => <div style={({float: 'left', width: size-2, height: size-2, background: '#fff', border: '1px solid #666'})} />;

export const Dead = ({size}) => <div style={({float: 'left', width: size-2, height: size-2, background: '#333', border: '1px solid #666'})} />;


export const Row = ({ row, size }) => (
  <div>
    {row.map((isAlive, i) => isAlive ? (
      <Alive key={i} size={size} />
    ) : (
      <Dead key={i} size={size} />
    ))}
  </div>
);

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.bool).isRequired,
  size: PropTypes.number.isRequired
};

const GameBoard = ({ pixels, squareSize }) => (
  <div style={({ width: pixels.length * squareSize })}>{pixels.map((row, i) => (<Row key={i} row={row} size={squareSize} />))}</div>
)

GameBoard.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  squareSize: PropTypes.number.isRequired
};

export default GameBoard;