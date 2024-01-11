function isPermutation(A) {
    const N = A.length;
    const elementSet = new Set();

    // Check for duplicates and validate the range
    for (let i = 0; i < N; i++) {
        const currentElement = A[i];

        // Check if the element is within the valid range and Check for duplicate elements
        if (currentElement < 1 || currentElement > N || elementSet.has(currentElement)) {
            return 0; // Element is out of range, not a permutation
        }

        // Add the element to the set
        elementSet.add(currentElement);
    }

    // Check if all numbers from 1 to N are present
    for (let i = 1; i <= N; i++) {
        if (!elementSet.has(i)) {
            return 0; // Missing element, not a permutation
        }
    }

    return 1; // All conditions satisfied, it's a permutation
}

// Test cases
console.log(isPermutation([4, 1, 3, 2])); // Output: 1
console.log(isPermutation([4, 1, 3]));    // Output: 0