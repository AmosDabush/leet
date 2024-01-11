// function solution(A) {
//     const occurrences = {};

//     // Count the occurrences of each element in the array
//     for (let i = 0; i < A.length; i++) {
//         const num = A[i];
//         if (occurrences[num] === undefined) {
//             occurrences[num] = 1;
//         } else {
//             occurrences[num]++;
//         }
//     }

//     // Find the element that occurs more than half of the time
//     for (const key in occurrences) {
//         if (occurrences[key] > A.length / 2) {
//             const candidate = parseInt(key); // Convert key back to integer
//             const index = A.indexOf(candidate);
//             return index;
//         }
//     }

//     // No dominator found
//     return -1;
// }









function solution(A) {
    counter = {};

    for (let i = 0; i < A.length; i++) {
        counter[A[i]] = counter[A[i]] ? counter[A[i]] + 1 : 1
    }

    for (const [key, value] of Object.entries(counter)) {
        const index = parseInt(key);
        if (value > A.length / 2) {
            return A.indexOf(index)
        }
    }
    return -1
}

console.log(solution([1, 3, 3, 2, 3, -1, 3, 3])); // expect 
console.log(solution([3, 3, 3, 2, 3, -1, 3, 3])); // expect 
console.log(solution([1, 3, 3])); // expect 
console.log(solution([1, 3])); // expect 
console.log(solution([1, 3, 2])); // expect 