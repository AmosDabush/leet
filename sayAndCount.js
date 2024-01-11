const countAndSay = (N) => {
  return sayRec([1], N);
};

let res = "";

const sayRec = (A, N) => {
  if (N <= 1) return res;
  let l = 1;
  let count = 1;
  for (let i = 0; i < l; i++) {
    let next = A[i + 1] || null;

    if (A[i] === next) count++;

    if ((next && A[i] !== next) || !A[i + 1]) {
      res = count.toString() + A[i] + res;
      count = 1;
    }
    l = res.length + 1;
  }
  return sayRec(res, N - 1);
};

// const countRec = (A, N) => {
//   const sayToInt = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//   };
//   for (let i = 0; i < A.length; i++) {
//     if (isNaN(A[i])) {
//       if (!sayToInt[A[i]]) return A[i];
//       A[i] = sayToInt[A[i]];
//     }
//     console.log(A);
//   }
//   return sayRec(A, N - 1);
// };

// console.log(sayRec([1, 2, 3, 2, 2, 2]));
var countAndSayRec = function (n) {
  // Return the base sequence '1' when n is 1
  if (n === 1) return "1";

  // Get the sequence for the previous number
  const previousSequence = countAndSayRec(n - 1);
  console.log({ n });
  console.log({ previousSequence });
  // Initialize variables for the new sequence, the digit being counted, and its count
  let newSequence = "";
  let digitToCount = previousSequence[0];
  let count = 0;

  // Iterate through the previous sequence to build the new sequence
  for (let i = 0; i <= previousSequence.length; i++) {
    // Count occurrences of the current digit
    if (previousSequence[i] === digitToCount) {
      count++;
    } else {
      // Append the count and digit to the new sequence
      newSequence += `${count}${digitToCount}`;

      // Update the digit to count and reset its count
      digitToCount = previousSequence[i];
      count = 1;
    }
    // console.log({
    //   newSequence,
    //   digitToCount,
    //   previousSequence: previousSequence[i],
    //   count,
    // });
  }

  // Return the newly formed sequence
  return newSequence;
};

// function countAndSay(n) {
//   let result = "1"; // the result of n = 1

//   for (let i = 1; i < n; i++) {
//     // enters only n > 1
//     let storage = ""; // inner storage to give to real one after collecting the result
//     let counter = 1; // default count of result[j]

//     for (let j = 0; j < result.length; j++) {
//       if (result[j] == result[j + 1]) counter++;
//       // if it repeats counter ++
//       else {
//         storage += counter + result[j];
//         counter = 1;
//       } // else we add to storage and setting counter to default
//     }

//     result = storage; // to keep result we giving it back to result
//   }

//   return result;
// }
console.log({ process: process.argv[2] });
console.log(countAndSay(parseInt(process.argv[2])));
