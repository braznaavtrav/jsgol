import React, { PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import AppBar from 'material-ui/AppBar';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToolbarSeparator, 
  ToolbarTitle
} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';

import { arrayOfN } from '../utils';


const FormGroup = ({ children }) => (
  <div style={{ padding: 10 }}>
    {children}
    <div style={{clear: 'both'}} />
  </div>
);


const Header = ({ step, sqrt, isPlaying, randomThreshold, fps, onFpsChange, onSqrtChange, onClearClick, onRandomThresholdChanged, onRandomThresholdChange, onPlayToggleClick, minFps, maxFps }) => (
    <Drawer open={true} openSecondary={true} zDepth={1}>
      <Toolbar>
        <ToolbarTitle text='Game Of Life' />
      </Toolbar>
      <FormGroup>
        <TextField
          floatingLabelText='Game Size'
          floatingLabelFixed={true}
          value={sqrt}
          onChange={onSqrtChange} />
      </FormGroup>
      <FormGroup>
        <label style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.498039)'}}>
          {`Random Threshold: ${parseFloat(randomThreshold).toFixed(2)}`}
        </label>
        <Slider
          style={{marginTop: -15, marginBottom: -55}}
          defaultValue={randomThreshold} 
          onDragStop={onRandomThresholdChanged}
          onChange={onRandomThresholdChange} />
      </FormGroup>
      <FormGroup>
        <SelectField 
          value={fps} 
          onChange={onFpsChange} 
          maxHeight={200}
          floatingLabelText='Frames Per Second'>
          {arrayOfN(maxFps-minFps+1).map((a, i) => (
            <MenuItem 
              value={i+minFps}
              key={i}
              primaryText={`${i+minFps} FPS`} />
          ))}
        </SelectField>
      </FormGroup>
      <FormGroup>
        <RaisedButton 
          style={{float: 'left'}}
          label={isPlaying ? 'Stop' : 'Play'} 
          labelColor='white'
          backgroundColor={isPlaying ? 'red' : 'green'}
          onClick={onPlayToggleClick} />
        <Chip style={{float: 'left', marginLeft: 10}}>{step}</Chip>
      </FormGroup>
      <FormGroup>
        <RaisedButton label='Clear' onClick={onClearClick} />
      </FormGroup>
    </Drawer>
);

Header.PropTypes = {
  step: PropTypes.number.isRequired, 
  isPlaying: PropTypes.bool.isRequired,
  randomThreshold: PropTypes.number.isRequired,
  fps: PropTypes.number.isRequired,
  onFpsChange: PropTypes.func.isRequired,
  onSqrtChange: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onRandomThresholdChanged: PropTypes.func.isRequired,
  onRandomThresholdChange: PropTypes.func.isRequired,
  onPlayToggleClick: PropTypes.func.isRequired
};

Header.defaultProps = {
  minFps: 12,
  maxFps: 60
};

export default Header;