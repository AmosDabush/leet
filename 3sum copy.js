// twoSum = (t = 0, a) => {
//   const res = [];
//   let j = a.length - 1;
//   let i = 0;

//   while (a[i] === a[i + 1]) {
//     i++;
//     console.log({ same: i, curr: a[i] });
//   }
//   while (i < j) {
//     // console.log(a[i], a[j]);
//     if (a[i] + a[j] < t) {
//       i++;
//       // console.log({ i });
//     } else if (a[i] + a[j] > t) {
//       // console.log({ sum: a[i] + a[j], t });
//       j--;
//       // console.log({ j, Aj: a[j] });
//     } else if (a[i] + a[j] === t) {
//       // console.log({ gg: "gg", sum: a[i] + a[j], t });
//       res.push(a[i], a[j]);
//       i++;
//     }
//   }
//   console.log({ res });
//   return res;
// };

// const ThreeSum = (A) => {
//   const sortA = A.sort((a, b) => a - b);
//   const result = [];
//   for (let j = sortA.length - 1; j >= 0; j--) {
//     let curr = sortA[j];
//     sortA.pop();
//     // console.log({ curr, sortA });
//     if (!curr) {
//       return;
//     }
//     res = twoSum(0, sortA);
//     if (res.length) {
//       result.push(res);
//       console.log(result);
//     }
//   }
//   console.log({ result });
//   return result;
// };

// console.log(ThreeSum([-1, 0, -1, 2, 0, 1, 4]));
