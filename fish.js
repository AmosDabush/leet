function solution(A, B) {
    const N = A.length;
    const downstreamFish = [];
    let aliveFishCount = 0;

    for (let i = 0; i < N; i++) {
        if (B[i] === 0) { // upstream fish

            for (let j = downstreamFish.length - 1; j >= 0; j--) {
                const downstreamFishSize = downstreamFish[j];

                if (downstreamFishSize > A[i]) {
                    // The downstream fish eats the upstream fish
                    break; // Stop the loop as the upstream fish is eaten
                }
                // The upstream fish eats the downstream fish
                downstreamFish.pop();
            }

            if (downstreamFish.length===0) {
                // No downstream fish left, upstream fish survives
                aliveFishCount++;
            }
        } else { // downstream fish
            downstreamFish.push(A[i]);
        }
    }

    aliveFishCount += downstreamFish.length;

    return aliveFishCount;
}
// Example usage:
var A = [4, 3, 2, 1, 5];
var B = [0, 1, 0, 0, 0];
console.log(solution(A, B)); // Output: 2

A = [4,2];
B = [0, 1];
console.log(solution(A, B)); // Output: 2

A = [4,2,3,4,5];
B = [0,1,1,1,1];
console.log(solution(A, B)); // Output: 5

A = [4,2,3,4,5];
B = [0,0,0,0,0];
console.log(solution(A, B)); // Output: 5

A = [1,2,3,4,5];
B = [1,0,0,0,1];
console.log(solution(A, B)); // Output: 4