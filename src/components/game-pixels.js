import React, { PropTypes } from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';

const borderColor = '#4e5060';
const aliveColor = '#FFD600';
const deadColor = '#263238';

const getRow = (sqrt, idx) => idx % sqrt;
const getCol = (sqrt, idx) => Math.ceil(idx / sqrt) - 1;

const GamePixels = ({ pixels, squareSize, sqrt }) => (
  <Layer>
      {pixels.map((isAlive, idx) => (
        // set position
        <Rect 
          key={idx}
          x={getRow(sqrt, idx) * squareSize}
          y={getCol(sqrt, idx) * squareSize}
          width={squareSize}
          height={squareSize}
          fill={isAlive ? aliveColor : deadColor}
          strokeWidth='0.5'
          stroke={borderColor}
          />
      ))}
  </Layer>
);

GamePixels.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  squareSize: PropTypes.number.isRequired,
  sqrt: PropTypes.number.isRequired
};

export default GamePixels