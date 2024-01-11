/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

const anagrams = (A) => {
  const resObject = {};

  for (let i = 0; i < A.length; i++) {
    const sortedWord = A[i].split("").sort().join();

    if (!resObject[sortedWord]) {
      resObject[sortedWord] = [A[i]];
    } else {
      resObject[sortedWord].push(A[i]);
    }
  }
  return Object.values(resObject);
};

console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(
//   "asdw".split("").sort((a, b) => ("" + a).localeCompare("" + b))
//   // .join("")
// );

// console.log(
//   "asdw".split("").sort(function (a, b) {
//     console.log({ a: a, b: b });
//     return ("" + a).localeCompare(b);
//   })
// );
