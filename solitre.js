function solution(A) {
    const N = A.length;

    // Create an array to store the maximum sum for each square
    const maxSums = new Array(N).fill(-Infinity);

    // The initial square is marked
    maxSums[0] = A[0];
    const dice = {
        min: 1,
        max: 6
    }
    // Iterate through the squares
    for (let i = 0; i < N; i++) {
        // Check the maximum sum for each possible dice throw
        for (let j = dice.min; j <= dice.max && i + j < N; j++) {
            maxSums[i + j] = Math.max(maxSums[i + j], maxSums[i] + A[i + j]);
        }
    }

    // The result is the maximum sum for the last square (N-1)
    return maxSums[N - 1];
}

// Example
console.log(solution([1, -2, 0, 9, -1, -2])); // Output: 8
console.log(solution([1, -2, 0, 9, -1, -3])); // Output: 8
console.log(solution([1, -2, 0, 9, -1, -9])); // Output: 8