import React, { PropTypes, Component } from 'react';
import { identity, map, filter } from 'ramda';
import {Layer, Rect, Stage, Group} from 'react-konva';
import { borderColor, aliveColor, deadColor } from './colors';


const getRow = (sqrt, idx) => idx % sqrt;
const getCol = (sqrt, idx) => Math.ceil(idx / sqrt) - 1;

const GamePixels = ({ pixels, squareSize, sqrt }) => (
  <Layer>
      {pixels.map((isAlive, idx) => isAlive ? (
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
      ) : null )}
  </Layer>
);

GamePixels.propTypes = {
  pixels: PropTypes.arrayOf(PropTypes.number).isRequired,
  squareSize: PropTypes.number.isRequired,
  sqrt: PropTypes.number.isRequired
};

export default GamePixels