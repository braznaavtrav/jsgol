import React, { PropTypes } from 'react';

const border = '1px solid #4e5060';
const aliveColor = '#FFD600';
const deadColor = '#263238';

export const Alive = ({size}) => <div style={({float: 'left', width: size-1, height: size-1, background: aliveColor, borderRight: border, borderBottom: border })} />;

export const Dead = ({size}) => <div style={({float: 'left', width: size-1, height: size-1, background: deadColor, borderRight: border, borderBottom: border })} />;

const GameBoard = ({ pixels, squareSize, sqrt }) => (
  <div style={({ width: sqrt * squareSize })}>
    {pixels.map((isAlive, i) => isAlive ? (
      <Alive key={i} size={squareSize} />
    ) : (
      <Dead key={i} size={squareSize} />
    ))}
  </div>
)

GameBoard.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  squareSize: PropTypes.number.isRequired,
  sqrt: PropTypes.number.isRequired
};

export default GameBoard;