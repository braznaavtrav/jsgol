import { connect } from 'react-redux';
import { 
  setFps, 
  setGameSize, 
  nextStep, 
  clear, 
  toggleIsRandom, 
  setRandomThreshold
} from '../actions';
import Header from '../components/header';

const mapStateToProps = ({ step, isPlaying, isRandom, randomThreshold }) => ({
  step, 
  isPlaying, 
  isRandom, 
  randomThreshold
});

const mapDispatchToProps = dispatch => ({
  onFpsChange: fps => dispatch(setFps(fps)),
  onGameSizeChange: gameSize => dispatch(setGameSize(gameSize)),
  onClearClick: () => dispatch(clear()), 
  onRandomToggle: () => dispatch(toggleIsRandom()), 
  onRandomThresholdChange: threshold => dispatch(setRandomThreshold(threshold))
});

const HeaderContainer = connect(state => state, mapDispatchToProps)(Header)

export default HeaderContainer;