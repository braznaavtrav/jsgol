import React, { PropTypes } from 'react';
import { Stage, Layer, Rect, Line } from 'react-konva';
import { arrayOfN } from '../utils';
import { borderColor } from './colors';

const GameStage = ({ squareSize, sqrt, children }) => {
  const size = sqrt * squareSize;
  const gridArr = arrayOfN(sqrt);
  return (
    <Stage width={window.innerWidth} height={window.innerWidth}>
      <Layer>
        {gridArr.map((val, i) => (
          <Line 
            key={i}
            x={0} 
            y={squareSize*i}
            points={[0, 0, size, 0]}
            strokeWidth={0.5}
            stroke={borderColor} />
        ))}
        {gridArr.map((val, i) => (
          <Line 
            key={i}
            x={squareSize*i} 
            y={0}
            points={[0, 0, 0, size]}
            strokeWidth={0.5}
            stroke={borderColor} />
        ))}
        <Rect 
          width={size} 
          height={size} 
          strokeWidth={0.5}
          stroke={borderColor}
          onMouseDown={e => console.log('mouse down!!!', e)}
          onMouseUp={e => console.log('mouse up!!!', e)}
          onMouseMove={e => console.log('mouse move!!', e)}
          onMouseOver={() => console.log('amo!!!')} />
      </Layer>
      {children}
    </Stage>
  )
};

GameStage.propTypes = {
  squareSize: PropTypes.number.isRequired,
  sqrt: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default GameStage;