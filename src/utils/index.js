export const DIMENSION = 3;

export const sliceInRows = (array, size) =>
  array
    .map((_, index) => index % size === 0 && array.slice(index, index + size))
    .filter(row => row);

export const sliceInColumns = (array, size) => {
  const arrayRows = sliceInRows(array, size);
  const arrayColums = Array(arrayRows.length);
  for (let i = 0; i < arrayRows.length; i++) {
    arrayColums[i] = arrayRows.map((_, k) => arrayRows[k][i]);
  }
  return arrayColums;
};

export const sliceInDiagonals = (array, size) => {
  const boardRows = sliceInRows(array, size);
  const diagonal1 = boardRows.map((_, k) => boardRows[k][k]);
  const diagonal2 = boardRows.reverse().map((_, k) => boardRows[k][k]);

  return [diagonal1, diagonal2];
};
