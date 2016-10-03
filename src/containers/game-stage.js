import { connect } from 'react-redux';
import GameStage from '../components/game-stage';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = ({ pixels, sqrt, squareSize }) => ({ size: sqrt * squareSize });

const GameStageContainer = connect(mapStateToProps)(GameStage)

export default GameStageContainer;