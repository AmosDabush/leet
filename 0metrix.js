//Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
//Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
const setZeroes = (matrix) => {
  const rows = new Set();
  const cols = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix);
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

// const setZeroes = (matrix) => {
//     // Use Sets to track rows and columns that need to be zeroed
//     const rowsToZero = new Set();
//     const colsToZero = new Set();

//     // Iterate over the matrix to find all zeroes
//     for (let row = 0; row < matrix.length; row++) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         if (matrix[row][col] === 0) {
//           rowsToZero.add(row);
//           colsToZero.add(col);
//         }
//       }
//     }

//     // Zero out all identified rows
//     for (const row of rowsToZero) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         matrix[row][col] = 0;
//       }
//     }

//     // Zero out all identified columns
//     for (const col of colsToZero) {
//       for (let row = 0; row < matrix.length; row++) {
//         matrix[row][col] = 0;
//       }
//     }
//   };
