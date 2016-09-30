import React, { PropTypes } from 'react';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToolbarSeparator, 
  ToolbarTitle
} from 'material-ui/Toolbar';
import Toggle from 'material-ui/Toggle';

const Header = ({ step, isPlaying, isRandom, randomThreshold, onFpsChange, onGameSizeChange, onClearClick, onRandomToggle, onRandomThresholdChange }) => (
  <Toolbar>
    <Toggle label="Random" onToggle={onRandomToggle} />
  </Toolbar>
);

Header.PropTypes = {
  step: PropTypes.number.isRequired, 
  isPlaying: PropTypes.bool.isRequired,
  isRandom: PropTypes.bool.isRequired,
  randomThreshold: PropTypes.number.isRequired,
  onFpsChange: PropTypes.func.isRequired,
  onGameSizeChange: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onRandomToggle: PropTypes.func.isRequired,
  onRandomThresholdChange: PropTypes.func.isRequired
};

export default Header;