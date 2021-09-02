module.exports = function solveSudoku(matrix) {
  // your solution
  const sizeMatrix = 9;
  const cell = 3;

function getEmptyCells(matrix) {
  for (let i = 0; i < sizeMatrix; i++) {
    for (let j = 0; j < sizeMatrix; j++) {
      if (matrix[i][j] === 0) {
      return ([i, j])
      }
    }
  }
}
  
  for (let i =0; i < 10; i++) {

  }
}
