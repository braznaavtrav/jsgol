/**
 * CONSTANTS
 */

export const NEXT_STEP = 'NEXT_STEP';
export const HAS_STARTED_PLAYING = 'HAS_STARTED_PLAYING';
export const HAS_STOPPED_PLAYING = 'HAS_STOPPED_PLAYING';
export const SET_FPS = 'SET_FPS';
export const SET_SQRT = 'SET_SQRT';
export const RANDOMIZE = 'RANDOMIZE';
export const SET_RANDOM_THRESHOLD = 'SET_RANDOM_THRESHOLD';
export const CLEAR = 'CLEAR';
export const DRAW_PIXEL = 'DRAW_PIXEL';


/**
 * ACTION CREATORS
 */

export const setSqrt = sqrt => ({ type: SET_SQRT, sqrt });

export const nextStep = () => ({ type: NEXT_STEP });

export const randomize = () => ({ type: RANDOMIZE });

export const setRandomThreshold = randomThreshold => ({ type: SET_RANDOM_THRESHOLD, randomThreshold });

export const drawPixel = idx => ({ type: DRAW_PIXEL, idx });


/**
 * THUNK FUNCTIONS (ASYNC)
 */

export const start = () => (dispatch, getState) => {
  const { fps } = getState();
  const interval = setInterval(() => {
    dispatch(nextStep());
  }, 1000 / fps);
  dispatch({ type: HAS_STARTED_PLAYING, interval });
};

export const stop = () => (dispatch, getState) => {
  const { interval } = getState();
  clearInterval(interval);
  dispatch({ type: HAS_STOPPED_PLAYING });
};

export const setFps = fps => (dispatch, getState) => {
  const { isPlaying } = getState();
  const wasPlaying = isPlaying;
  if (isPlaying) dispatch(stop());
  dispatch({ type: SET_FPS, fps });
  if (wasPlaying) dispatch(start());
};

export const clear = () => dispatch => {
  dispatch(stop());
  dispatch({ type: CLEAR });
};

export const toggleIsPlaying = () => {
  return (dispatch, getState) => {
    const { isPlaying } = getState();
    if (isPlaying) {
      return dispatch(stop());
    }
    return dispatch(start());
  };
};
