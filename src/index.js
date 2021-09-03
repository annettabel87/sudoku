module.exports = function solveSudoku(matrix) {
  // your solution

  const size = 9;
  const area = 3;

  function solve(matrix){    
    for (let r = 0; r < size; r++){    
        for (let c = 0; c < size; c++){    
          if (matrix[r][c] === 0){    
            for (let n = 1; n <= size; n++){    
              if (isValid(matrix, r, c, n)){    
                matrix[r][c] = n;    
                if (solveSudoku(matrix)){    
                 return matrix;    
                } else {    
                  matrix[r][c] = 0;    
                }    
              }    
            }    
            return false;    
          }    
        }    
      }    
      return matrix;    
    }
    
    function isValid(matrix, r, c, n){    
      for (let i = 0; i < size; i++) {
        if (matrix[i][c] === n && i !== r) {
            return false;
        }
    }

    
    for (let i = 0; i < size; i++) {
        if (matrix[r][i] === n && i !== c) {
            return false;
        }
    }

    const startRow = Math.floor( r/area ) * area;
    const startCol = Math.floor( c/area ) * area;

    for (let i = startRow; i < startRow + area; i++) {
        for (let j = startCol; j < startCol + area; j++) {
            if (matrix[i][j] === n && i !== r && j !== c) {
                return false;
            }
        }
    }

    return true;
}     
    
    return solve(matrix);
}
