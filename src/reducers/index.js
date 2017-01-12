import { 
  NEXT_STEP, 
  HAS_STARTED_PLAYING, 
  HAS_STOPPED_PLAYING,
  SET_FPS,
  SET_SQRT,
  RANDOMIZE,
  SET_RANDOM_THRESHOLD,
  CLEAR,
  DRAW_PIXEL
} from '../actions';
import { arrayOfN } from '../utils';

/**
 * Takes a float `n` between 0 and 1, returns a function that returns a bool with `n` probability
 * @param  Float
 * @return Function
 */
const getRandomizeFn = n => () => (Math.random() > (1 - n)) ? 1 : 0;

/**
 * Create the matrix of the gameboard. 
 * @param  Integer  size     column/row size
 * @param  Boolean  isRandom 
 * @return Integer
 */
const gameBoardOfSize = (size, getRandomizeFn) => arrayOfN(size, getRandomizeFn);


/**
 * Calculate the number of alive neighbors
 * @param  Integer                x
 * @param  Integer                y
 * @param  Array[Array[Boolean]]  pixels
 * @return Integer
 */
const sumOfNeighbors = (idx, sqrt, pixels) => {
  let sum = 0;

  if (pixels[idx - sqrt - 1]) sum++;
  if (pixels[idx - sqrt])     sum++;
  if (pixels[idx - sqrt + 1]) sum++;
  if (pixels[idx - 1])        sum++;
  if (pixels[idx + 1])        sum++;
  if (pixels[idx + sqrt - 1]) sum++;
  if (pixels[idx + sqrt])     sum++;
  if (pixels[idx + sqrt + 1]) sum++;

  return sum;
}


const nextStateForPoint = (isAlive, idx, sqrt, pixels) => {
  const n = sumOfNeighbors(idx, sqrt, pixels);
  if (!isAlive) return n === 3 ? 1 : 0;
  if (n < 2) return 0;
  if (n <= 3) return 1;
};


const nextPixels = (sqrt, pixels) => pixels.map((val, idx) => nextStateForPoint(val, idx, sqrt, pixels));

const INITIAL_STATE = {
  step: 0,
  isPlaying: false,
  sqrt: 44,
  squareSize: 10,
  fps: 24,
  pixels: gameBoardOfSize(Math.pow(44, 2)),
  randomThreshold: 0,
  interval: undefined
};

export default function reducer(state = INITIAL_STATE, action) {
  const { randomThreshold, pixels, sqrt } = state;
  switch (action.type) {
    
    case NEXT_STEP:
      return Object.assign({}, state, { 
        step: state.step + 1,
        pixels: nextPixels(sqrt, pixels) });
    
    case HAS_STARTED_PLAYING:
      return Object.assign({}, state, { 
        isPlaying: true, 
        interval: action.interval });
    
    case HAS_STOPPED_PLAYING:
      return Object.assign({}, state, { 
        isPlaying: false });
    
    case SET_FPS:
      return Object.assign({}, state, { 
        fps: action.fps });
    
    case SET_SQRT:
      return Object.assign({}, state, {
        sqrt: action.sqrt,
        pixels: gameBoardOfSize(Math.pow(action.sqrt, 2)) });

    case RANDOMIZE:
      return Object.assign({}, state, { 
        pixels: gameBoardOfSize(pixels.length, getRandomizeFn(randomThreshold)),
        step: 0 });

    case SET_RANDOM_THRESHOLD:
      return Object.assign({}, state, { 
        randomThreshold: action.randomThreshold });

    case CLEAR:
      return Object.assign({}, state, { 
        pixels: gameBoardOfSize(pixels.length),
        step: 0 });

    case DRAW_PIXEL:
      return Object.assign({}, state, {
        pixels: pixels.map((isAlive, idx) => idx === action.idx ? action.isAlive : isAlive) });

    default:
      return state;
  }
}