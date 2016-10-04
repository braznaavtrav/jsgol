import { connect } from 'react-redux';
import GameStage from '../components/game-stage';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = ({ sqrt, squareSize }) => ({ sqrt, squareSize });

const GameStageContainer = connect(mapStateToProps)(GameStage)

export default GameStageContainer;