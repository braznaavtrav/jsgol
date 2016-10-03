import { connect } from 'react-redux';
import GamePixels from '../components/game-pixels';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = ({ pixels, sqrt, squareSize }) => ({ pixels, sqrt, squareSize });

const GamePixelsContainer = connect(mapStateToProps)(GamePixels)

export default GamePixelsContainer;