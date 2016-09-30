import { 
  NEXT_STEP, 
  HAS_STARTED_PLAYING, 
  HAS_STOPPED_PLAYING,
  SET_FPS,
  SET_GAME_SIZE,
  RANDOMIZE,
  SET_RANDOM_THRESHOLD,
  CLEAR  
} from '../actions';

/**
 * Duh... what do you think this does.
 */
const returnFalse = () => false;

/**
 * Build an array with length `size`, calling `getValue` for each value
 * @param  Integer  size
 * @param  Function value
 * @return Array[Any]
 */
const arrayOfN = (size, getValue = returnFalse) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = getValue();
  }
  return arr;
};

/**
 * Takes a float `n` between 0 and 1, returns a function that returns a bool with `n` probability
 * @param  Float
 * @return Function
 */
const getRandomizeFn = n => () => (Math.random() > (1 - n));

/**
 * Create the matrix of the gameboard. 
 * @param  Integer  size     column/row size
 * @param  Function getValue function to use to set the value of each cell
 * @return Array[Array[Any]]
 */
const gameBoardOfSize = (size, getValue = returnFalse) => arrayOfN(size).map(() => arrayOfN(size, getValue));

/**
 * Returns a filtered version of `arrayOfCoordinates` by removing member arrays that contain either -1 or `gameSize`
 * @param  Array[Array[Integer]]  arrayOfCoordinates
 * @param  Integer                gameSize
 * @return Array[Array[Integer]]
 */
const filterValidCoordinates = (arrayOfCoordinates, gameSize) => arrayOfCoordinates.filter(coordinate => (
  coordinate.indexOf(-1) === -1 && coordinate.indexOf(gameSize) === -1
));

/**
 * Find valid coordinates for the neighbors of the `x`, `y` coordinate passed.
 * Coordinates are valid as long as the x and y values are between 0 (inclusive) and gameSize (exclusive)
 * @param  Integer  x
 * @param  Integer  y
 * @param  Integer  gameSize
 * @return Array[Array[Integer]]
 */
const neighborIndices = (x, y, gameSize) => filterValidCoordinates([
  [x-1, y-1], [x, y-1], [x+1, y-1], 
  [x-1, y  ],           [x+1, y  ],
  [x-1, y+1], [x, y+1], [x+1, y+1] 
], gameSize);

/**
 * Calculate the number of alive neighbors
 * @param  Integer                x
 * @param  Integer                y
 * @param  Array[Array[Boolean]]  pixels
 * @return Integer
 */
const sumOfNeighbors = (x, y, pixels) => neighborIndices(x,y, pixels.length).reduce((n, [xx,yy]) => n + (pixels[yy][xx] ? 1 : 0), 0);


const nextStateForPoint = (isAlive, x, y, pixels) => {
  const n = sumOfNeighbors(x, y, pixels);
  if (!isAlive) return n === 3;
  if (n < 2) return false;
  if (n <= 3) return true;
};

const nextPixels = pixels => pixels.map(
  (row, y) => row.map(
    (isAlive, x) => nextStateForPoint(isAlive, x, y, pixels)
  )
);

const INITIAL_STATE = {
  step: 0,
  isPlaying: false,
  pixels: gameBoardOfSize(44),
  randomThreshold: 0.5,
  interval: undefined
};

export default function reducer(state = INITIAL_STATE, action) {
  const { randomThreshold, pixels } = state;
  switch (action.type) {
    case NEXT_STEP:
      return Object.assign({}, state, { 
        step: state.step + 1,
        pixels: nextPixels(pixels)
      });
    
    case HAS_STARTED_PLAYING:
      return Object.assign({}, state, { isPlaying: true, interval: action.interval });
    
    case HAS_STOPPED_PLAYING:
      return Object.assign({}, state, { isPlaying: false });
    
    case SET_FPS:
      return Object.assign({}, state, { fps: action.fps });
    
    case SET_GAME_SIZE:
      return Object.assign({}, state, {  
        pixels: gameBoardOfSize(action.gameSize)
      });

    case RANDOMIZE:
      return Object.assign({}, state, { 
        pixels: gameBoardOfSize(pixels.length, getRandomizeFn(randomThreshold)) 
      });

    case SET_RANDOM_THRESHOLD:
      return Object.assign({}, state, { randomThreshold: action.randomThreshold });

    case CLEAR:
      return Object.assign({}, state, { pixels: gameBoardOfSize(pixels.length) })

    default:
      return state;
  }
}