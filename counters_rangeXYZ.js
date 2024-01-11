// function solution(A, B, K) {
//     // Check if A is divisible by K, if not, find the next divisible number
//     const start = A % K === 0 ? A : A + (K - (A % K));
//     // console.log(`${A}:${A}+(${K}-(${A}%${K}))`)

//     // how many time B between start and K
//     const count = Math.floor((B - start) / K) + 1;
//     // console.log(`Math.floor((${B}-${start})/${K}) +1`)

//     // console.log(start)
//     return count;
// }

// // Example usage:
// console.log(solution(6, 9, 2)); // Output: 2
// console.log(solution(6, 7, 7)); // Output: 1
// console.log(solution(6, 7, 3)); // Output: 1
// console.log(solution(6, 11, 2)); // Output: 3
// console.log(solution(6, 12, 2)); // Output: 4
// console.log(solution(6, 12, 4)); // Output: 2
// console.log(solution(6, 12, 8)); // Output: 1


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


/**An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)]. */



// function solution(A) {
//     const len = A.length;
//     const set = new Set();
//     for (let i = 0; i < len; i++) {
//         const currItem = A[i];
//         set.add(A[i]);
//     }

//     const setLen= set.size
//     for (let i = 1; i <= setLen+1; i++) {
//         console.log(set,i);
//         if (!set.has(i)) {
//             return (i)
//         }
//     }
// }

// console.log(solution([2,5,1,4]));
// console.log(solution([1,2,4]));
// console.log(solution([1,2,4]));
// console.log(solution([1,2,4]));
// console.log(solution([1,2]));
// console.log(solution([1,2,1]));
// console.log(solution([1,1]));
// console.log(solution([1]));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/**A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000]. */

function solution(A) {
    let leftSum = 0;
    let rightSum = A.reduce((sum, num) => sum + num, 0);
    let minDifference = Number.MAX_SAFE_INTEGER; // Use a very large number
    
    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i];
        rightSum -= A[i];

        let currentDifference = Math.abs(leftSum - rightSum);

        if (currentDifference < minDifference) {
            minDifference = currentDifference;
        }
    }

    return minDifference;
}

console.log(solution([3, 1, 2, 4, 3]))
console.log(solution([1,1]))
console.log(solution([-10, -20, -30, -40, 100])) //expected 20