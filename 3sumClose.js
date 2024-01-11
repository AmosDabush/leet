/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function(nums, target) {

// };
const threeSumClosest = (nums, target) => {
  const S = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < S.length - 2; i++) {
    let l = i + 1;
    let r = S.length - 1;
    // Skip duplicates
    while (S[i] === S[i - 1]) i++;

    // just 2sum problem from here when target=S[i];
    while (l < r) {
      var sum = Math.abs(S[i] + S[l] + S[r]);
      res = [S[i], S[l], S[r]];
      console.log({ res, sum });

      //   console.log({ target, i: target - sum });
      //   console.log({
      //     iP: target - (res[0] + res[1] + res[2]),
      //     i: S[i],
      //     l: S[l],
      //     r: S[r],
      //   });
      if (target - sum === 0) {
        l++;
        continue;
      }
      if (
        Math.abs(target - sum) < Math.abs(target - (res[1] + res[2] + res[3]))
      ) {
        res = [S[i], S[l], S[r]];
        while (S[r] === S[r - 1]) r--;
        while (S[l] === S[l + 1]) l++;
      }
      l++;
      r--;
    }
  }
  console.log({ res });
  return res[0] + res[1] + res[2];
};
// console.log(
//   threeSumClosest([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0])
// );
// console.log(threeSumClosest([-1, 0, 1, 2, -1, -4]));
console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(Math.abs(-1));
