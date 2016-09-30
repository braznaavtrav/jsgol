import React, { PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToolbarSeparator, 
  ToolbarTitle
} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';



const Header = ({ step, isPlaying, isRandom, randomThreshold, onFpsChange, onGameSizeChange, onClearClick, onRandomizeClick, onRandomThresholdChange, onPlayToggleClick }) => (
  <Toolbar>
    <ToolbarGroup firstChild={true} style={{ marginLeft: 0 }}>
      <ToolbarTitle text='Game of Life' />
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarTitle text={`Random Threshold: ${parseFloat(randomThreshold).toFixed(2)}`} />
      <Slider 
        defaultValue={randomThreshold} 
        onChange={onRandomThresholdChange} 
        style={{width: 100}}/>
      <RaisedButton 
        label="Randomize" 
        primary={true}
        onClick={onRandomizeClick} />
    </ToolbarGroup>
    <ToolbarGroup lastChild={true}>
      <ToolbarTitle text={`${step}`} />
      <RaisedButton label={isPlaying ? 'Stop' : 'Play'} primary={true} onClick={onPlayToggleClick} />
    </ToolbarGroup>
  </Toolbar>
);

Header.PropTypes = {
  step: PropTypes.number.isRequired, 
  isPlaying: PropTypes.bool.isRequired,
  randomThreshold: PropTypes.number.isRequired,
  onFpsChange: PropTypes.func.isRequired,
  onGameSizeChange: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onRandomizeClick: PropTypes.func.isRequired,
  onRandomThresholdChange: PropTypes.func.isRequired,
  onPlayToggleClick: PropTypes.func.isRequired
};

export default Header;