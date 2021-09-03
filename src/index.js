module.exports = function solveSudoku(matrix) {
  // your solution
  const sizeMatrix = 9;
  const area = 3;

const getEmptyCells = (matrix) => {
  for (let r = 0; r < sizeMatrix; r++) {
    for (let c = 0; c < sizeMatrix; c++) {
      if (matrix[r][c] === 0) {
      return [r, c];
      }
    }
  }
  return null;
}
  
  const isValid = (number, position, matrix) => {
    const [r, c] = position;

    for (let i = 0; i < sizeMatrix; i++) {
      if(matrix[i][c] === number && i != r) {
        return false;
      }      
    }

    for (let j = 0; j < sizeMatrix; j++) {
      if(matrix[r][j] === number && j != c) {
        return false;
      }      
    }

    const startAreaRow = Math.floor(r/area) * area;
    const startAreaColumn = Math.floor(c/area) * area;
    for (let i = startAreaRow; i < startAreaRow + area; i++) {
      for (let j = startAreaColumn; j < startAreaColumn + area; j++) {
      if (matrix[i][j] === number && i != r && j != c) {
        return false;
      }
    }
  }
  return true;
  }
  const solve = () => {
    const currentPosition = getEmptyCells(matrix);
    if (currentPosition = null) {
      return true;
    }

    for (let i = 1; i <= sizeMatrix; i++) {
      let currentNumber = i;
      let valid = isValid(currentNumber, currentPosition, matrix);
    }
    return false;
  }

  solve();

  return matrix;
}
