//   function solution(N, A) {
//       let counters = new Array(N).fill(0)
//       for (let i = 0; i < A.length; i++) {
//           if (A[i] >= 1 && A[i] <= N) {
//               counters[A[i] - 1]++
//           }
//           if (A[i] > N) {
//               const maxVal = Math.max.apply(null, counters);
//               counters = new Array(N).fill(maxVal)
//           }
//       }
//       return counters
//   }

  //   function solution(N, A) {
  //     let counters = new Array(N).fill(0);
  //     let maxCounter = 0;
  //     let lastMaxCounterUpdate = 0;

  //     for (let i = 0; i < A.length; i++) {
  //       const operation = A[i];

  //       if (operation >= 1 && operation <= N) {
  //         const counterIndex = operation - 1;
  //         counters[counterIndex] = Math.max(counters[counterIndex], lastMaxCounterUpdate) + 1;
  //         maxCounter = Math.max(maxCounter, counters[counterIndex]);
  //       } else if (operation === N + 1) {
  //         lastMaxCounterUpdate = maxCounter;
  //       }
  //     }

  //     for (let i = 0; i < counters.length; i++) {
  //       counters[i] = Math.max(counters[i], lastMaxCounterUpdate);
  //     }

  //     return counters;
  //   }

  function solution(N, A) {
    // Initialize an array 'counters' of size N, all initialized to 0.
    let counters = new Array(N).fill(0);
    
    // Initialize 'maxCounter' to keep track of the maximum counter value.
    let maxCounter = 0;
  
    // Initialize 'lastMaxCounterUpdate' to keep track of the last max counter update.
    let lastMaxCounterUpdate = 0;
  
    // Iterate through the operations in the array 'A'.
    for (let i = 0; i < A.length; i++) {
      const operation = A[i];
  
      // If the operation is within the valid range [1, N], increment the corresponding counter.
      if (operation >= 1 && operation <= N) {
        const counterIndex = operation - 1;
        // Update the counter with the maximum value between its current value and 'lastMaxCounterUpdate' + 1.
        counters[counterIndex] = Math.max(counters[counterIndex], lastMaxCounterUpdate) + 1;
        // Update 'maxCounter' if needed.
        maxCounter = Math.max(maxCounter, counters[counterIndex]);
      } 
      // If the operation is 'max counter', update 'lastMaxCounterUpdate'.
      else if (operation === N + 1) {
        lastMaxCounterUpdate = maxCounter;
      }
    }
  
    // After processing all operations, update any counters that are less than 'lastMaxCounterUpdate' to be equal to it.
    for (let i = 0; i < counters.length; i++) {
      counters[i] = Math.max(counters[i], lastMaxCounterUpdate);
    }
  
    // Return the final values of the counters.
    return counters;
  }
  
  // Example usage:
  const N = 5;
  const A = [3, 4, 4, 6, 1, 4, 4];
  const result = solution(N, A);
  console.log(result); // Output: [3, 2, 2, 4, 2]
  

  console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // expext [3, 2, 2, 4, 2]