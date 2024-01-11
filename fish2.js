function solution(A, B) {
    const N = A.length;
    const downstreamFish = [];
    let aliveFishCount = 0;

    for (let i = 0; i < N; i++) {
        if (B[i] === 0) { // upstream fish
            let eatenByDownstream = false;

            for (let j = downstreamFish.length - 1; j >= 0; j--) {
                const downstreamFishSize = downstreamFish[j];

                if (downstreamFishSize > A[i]) {
                    // The downstream fish eats the upstream fish
                    eatenByDownstream = true;
                    break; // Stop the loop as the upstream fish is eaten
                }
                // The upstream fish eats the downstream fish
                downstreamFish.pop();
            }  

            if (!eatenByDownstream) {
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