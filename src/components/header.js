import React, { PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import AppBar from 'material-ui/AppBar';
import { 
  Toolbar, 
  ToolbarGroup, 
  ToolbarSeparator, 
  ToolbarTitle
} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';


const FormGroup = ({ children }) => <div style={{ padding: 10 }}>{children}</div>


const Header = ({ step, sqrt, isPlaying, randomThreshold, onFpsChange, onSqrtChange, onClearClick, onRandomThresholdChanged, onRandomThresholdChange, onPlayToggleClick }) => (
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
        <label>{`Random Threshold: ${parseFloat(randomThreshold).toFixed(2)}`}</label>
        <Slider
          defaultValue={randomThreshold} 
          onDragStop={onRandomThresholdChanged}
          onChange={onRandomThresholdChange} />
      </FormGroup>
      <FormGroup>
        {`${step}`}
        <RaisedButton label={isPlaying ? 'Stop' : 'Play'} primary={true} onClick={onPlayToggleClick} />
      </FormGroup>
      <FormGroup>
        <RaisedButton label='Clear' primary={true} onClick={onClearClick} />
      </FormGroup>
    </Drawer>
);

Header.PropTypes = {
  step: PropTypes.number.isRequired, 
  isPlaying: PropTypes.bool.isRequired,
  randomThreshold: PropTypes.number.isRequired,
  onFpsChange: PropTypes.func.isRequired,
  onSqrtChange: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onRandomThresholdChanged: PropTypes.func.isRequired,
  onRandomThresholdChange: PropTypes.func.isRequired,
  onPlayToggleClick: PropTypes.func.isRequired
};

export default Header;