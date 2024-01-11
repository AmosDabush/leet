function solution(temperatures) {
  let warmNights = 0;

  for (let i = 1; i < temperatures.length - 1; i += 2) {
    const prevDayTemp = temperatures[i - 1];
    const currentNightTemp = temperatures[i];
    const nextDayTemp = temperatures[i + 1];

    if (
      currentNightTemp >= prevDayTemp - 5 &&
      currentNightTemp >= nextDayTemp - 5
    ) {
      warmNights++;
    }
  }

  return warmNights;
}

// Test Cases
console.log(solution([10, 0, 2, -1, 4])); // Expected output: 1
console.log(solution([15, 0, 3, -2, 3, -3, -1])); // Expected output: 1
console.log(solution([-10, -5, 0, 10, 15, 10, 16])); // Expected output: 2
console.log(solution([0])); // Expected output: 0
console.log(solution([10, 5, 15, 8, 20, 15, 25])); // Expected output: 3
console.log(solution([10, -6, 0, 5, 8, 2, 15])); // Expected output: 0
console.log(solution([15, -2, 10, -1, 18, -3, 12])); // Expected output: 3
// You can add more test cases as needed, including the maximum input size test.
