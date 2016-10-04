/**
 * Duh... what do you think this does.
 */
export const returnZero = () => 0;

/**
 * Build an array with length `size`, calling `getValue` for each value
 * @param  Integer  size
 * @param  Function value
 * @return Array[Any]
 */
export const arrayOfN = (size, getValue = returnZero) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = getValue();
  }
  return arr;
};