import { connect } from 'react-redux';
import GameBoard from '../components/game-board';

const mapDispatchToProps = dispatch => ({
  onFpsChange: fps => dispatch(setFps(fps)),
  onGameSizeChange: gameSize => dispatch(setGameSize(gameSize)),
  onClearClick: () => dispatch(clear()), 
  onRandomToggle: () => dispatch(toggleIsRandom()), 
  onRandomThresholdChange: threshold => dispatch(setRandomThreshold(threshold))
});

const mapStateToProps = ({ pixels, sqrt, squareSize }) => ({ pixels, sqrt, squareSize });

const GameBoardContainer = connect(mapStateToProps)(GameBoard)

export default GameBoardContainer;