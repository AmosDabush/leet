function solution(H) {
  let stack = []; // Create an empty stack to store heights
  let count = 0; // Initialize the count of blocks needed

  for (let i = 0; i < H.length; i++) {
    let height = H[i]; // Get the current height

    // Remove heights from the stack that are higher than the current height
    for (let j = stack.length - 1; j >= 0; j--) {
      if (stack[j] > height) {
        stack.pop(); // Remove the last (highest) height from the stack
      } else {
        break; // Stop removing heights if the current height is greater or equal
      }
    }

    // If the stack is empty or the top height in the stack is lower than the current height, add a block
    if (stack.length === 0 || stack[stack.length - 1] < height) {
      stack.push(height); // Add the current height to the stack
      count++; // Increase the block count
    }
  }

  return count; // Return the total count of blocks needed
}

console.log("Output:1 = 7", solution([8, 8, 5, 7, 9, 8, 7, 4, 8])); // Output: 7
console.log("Output:2 = 1", solution([1])); // Output: 1 (Only one block needed for a wall of height 1)
console.log("Output:3 = 1", solution([1, 1, 1, 1, 1])); // Output: 1 (All blocks have the same height)
console.log("Output:4 = 5", solution([1, 2, 3, 4, 5])); // Output: 5 (Blocks are increasing in height)
console.log("Output:5 = 5", solution([5, 4, 3, 2, 1])); // Output: 5 (Blocks are decreasing in height)
console.log("Output:6 = 3", solution([1, 2, 3, 2, 1])); // Output: 3 (Blocks are in the shape of a hill)
console.log("Output:7 = 1", solution([5, 5, 5, 5, 5])); // Output: 1 (All blocks have the same maximum height)
console.log("Output:8 = 3", solution([1, 2, 1, 2, 1])); // Output: 3 (Blocks are in the shape of a hill with two peaks)
console.log("Output:9 = 2", solution([1, 1, 2, 2, 1])); // Output: 2 (Blocks are in the shape of a hill with one peak)
console.log("Output:10 = 5", solution([1, 3, 5, 4, 2])); // Output: 5 (Blocks have varying heights)
console.log("Output:11 = 5", solution([3, 2, 1, 2, 3])); // Output: 5 (Blocks are in the shape of a valley)
console.log(
  "Output:12 = 7",
  solution([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7])
); // Output: 7 (double array)
