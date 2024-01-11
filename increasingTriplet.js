// // Define a function named 'increasingTriplet' that takes an array 'nums' as input
var increasingTriplet2 = function (nums) {
  // Initialize two variables 'i' and 'j' to keep track of the first and second smallest elements
  let first = null;
  let second = null;

  // Iterate through the elements in the 'nums' array
  for (const curr of nums) {
    // If 'i' is null or greater than or equal to the current 'num', update 'i' to 'num'
    if (first == null || first >= curr) {
      first = curr;
      continue; // Move to the next iteration
    }

    // If 'j' is null or greater than or equal to the current 'num', update 'j' to 'num'
    if (second == null || second >= curr) {
      second = curr;
      continue; // Move to the next iteration
    }

    // If we reach this point, it means we found a third element greater than both 'i' and 'j', so return 'true'
    console.log([first, second, curr]);

    return true;
  }

  // If no increasing triplet is found in the array, return 'false'
  return false;
};
function increasingTriplet3(nums) {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      // Found the increasing triplet
      return [first, second, num];
    }
  }

  return [];
}
const increasingTriplet = (numbers) => {
  let first = null; // Initialize the first element of the potential triplet.
  let second = null; // Initialize the second element of the potential triplet.

  // Loop through the array.
  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i]; // Get the current element from the array.

    // Check if 'first' is null or the current element is not greater than 'first'.
    if (first === null || first >= curr) {
      first = curr; // Update 'first' to the current element.
      continue; // Continue to the next iteration of the loop.
    }

    // Check if 'second' is null or the current element is not greater than 'second'.
    if (second === null || second >= curr) {
      second = curr; // Update 'second' to the current element.
      continue; // Continue to the next iteration of the loop.
    }

    // If 'first', 'second', and 'curr' form a triplet in increasing order, log it and return true.
    console.log([first, second, curr]);
    return true;
  }

  // If no triplet is found, return false.
  return false;
};

// //The increasing triplet subsequence in the array [0,2,1,3,4] is [0, 1, 3].

// console.log("// should be true outputs");
console.log(increasingTriplet3([10, 100, 20, 12, 3, 14])); // [10, 12, 14]
console.log(increasingTriplet2([10, 100, 20, 12, 3, 14])); // [10, 12, 14]
console.log(increasingTriplet([10, 100, 20, 12, 3, 14])); // [10, 12, 14]

// console.log(increasingTriplet([0, 2, 1, 3, 4])); // [0, 1, 3]
// console.log(increasingTriplet([0, 6, 5, 2, 2, 2, 1, 3, 4])); // [0, 2, 4]
// console.log(increasingTriplet([1, 2, 3])); // [1, 2, 3]
// console.log(increasingTriplet([1, 2, 2, 3, 4, 5])); // [1, 2, 3]
// console.log(increasingTriplet([5, 6, 7, 8, 9, 10])); // [5, 6, 7]
// console.log(increasingTriplet([5, 6, 7, 1, 2, 3])); // [5, 6, 7]
// console.log(increasingTriplet([5, 6, 2, 1, 3, 7])); // [2, 3, 7]
// console.log(increasingTriplet([1, 0, 2, 3, 4])); // [0, 2, 3]
// console.log("// should be false outputs");
// console.log(increasingTriplet([1])); // false
// console.log(increasingTriplet([1, 2])); // false
// console.log(increasingTriplet([2, 1])); // false
// console.log(increasingTriplet([2, 1, 4])); // [1, 4]
// console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
// console.log(increasingTriplet([10, 9, 8, 7, 6])); // false
// console.log(increasingTriplet([5, 4, 3, 3, 2, 2, 1])); // false
