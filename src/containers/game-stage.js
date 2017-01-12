import { connect } from 'react-redux';
import { drawPixel } from '../actions';
import GameStage from '../components/game-stage';

const mapDispatchToProps = dispatch => ({
  onDrawPixel: (idx) => dispatch(drawPixel(idx))
});

const mapStateToProps = ({ sqrt, squareSize }) => ({ sqrt, squareSize });

const GameStageContainer = connect(mapStateToProps)(GameStage)

export default GameStageContainer;