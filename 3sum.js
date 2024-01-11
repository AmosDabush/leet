const threeSum = (A) => {
  const S = A.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < S.length - 2; i++) {
    let l = i + 1;
    let r = S.length - 1;
    // Skip duplicates
    while (S[i] === S[i - 1]) i++;

    // just 2sum problem from here when target=S[i];
    while (l < r) {
      var sum = S[i] + S[l] + S[r];
      console.log({ sum });
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else if (sum === 0) {
        // Skip duplicates
        while (S[r] === S[r - 1]) r--;
        while (S[l] === S[l + 1]) l++;

        res.push([S[i], S[r], S[l]]);

        l++;
        r--;
      }
    }
  }
  return res;
};
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
