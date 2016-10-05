import { connect } from 'react-redux';
import { 
  setFps, 
  setSqrt, 
  nextStep, 
  clear, 
  toggleIsRandom,
  toggleIsPlaying,
  setRandomThreshold,
  randomize
} from '../actions';
import Header from '../components/header';

const mapStateToProps = ({ step, isPlaying, isRandom, randomThreshold, fps }) => ({
  step, 
  sqrt,
  isPlaying, 
  randomThreshold,
  fps
});

const mapDispatchToProps = dispatch => ({
  onPlayToggleClick: () => dispatch(toggleIsPlaying()),
  onFpsChange: (evt, idx, fps) => dispatch(setFps(fps)),
  onSqrtChange: (evt, sqrt) => sqrt ? dispatch(setSqrt(parseInt(sqrt))) : null,
  onClearClick: () => dispatch(clear()), 
  onRandomThresholdChanged: () => dispatch(randomize()), 
  onRandomThresholdChange: (evt, threshold) => dispatch(setRandomThreshold(threshold))
});

const HeaderContainer = connect(state => state, mapDispatchToProps)(Header)

export default HeaderContainer;