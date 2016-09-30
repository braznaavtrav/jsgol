import { connect } from 'react-redux';
import { 
  setFps, 
  setGameSize, 
  nextStep, 
  clear, 
  toggleIsRandom,
  toggleIsPlaying,
  setRandomThreshold,
  randomize
} from '../actions';
import Header from '../components/header';

const mapStateToProps = ({ step, isPlaying, isRandom, randomThreshold }) => ({
  step, 
  isPlaying, 
  randomThreshold
});

const mapDispatchToProps = dispatch => ({
  onPlayToggleClick: () => dispatch(toggleIsPlaying()),
  onFpsChange: fps => dispatch(setFps(fps)),
  onGameSizeChange: gameSize => dispatch(setGameSize(gameSize)),
  onClearClick: () => dispatch(clear()), 
  onRandomizeClick: () => dispatch(randomize()), 
  onRandomThresholdChange: (evt, threshold) => dispatch(setRandomThreshold(threshold))
});

const HeaderContainer = connect(state => state, mapDispatchToProps)(Header)

export default HeaderContainer;