import React, { PropTypes } from 'react';
import { Stage } from 'react-konva';

const GameStage = ({ size, children }) => <Stage width={size} height={size}>{children}</Stage>;

GameStage.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default GameStage;