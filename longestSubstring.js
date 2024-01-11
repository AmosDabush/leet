/**
 * Longest Substring Without Repeating Characters
 * Medium
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

const lengthOfLongestSubstring = (S) => {
  let index = 0;
  let set = new Set();
  let max = 0;
  while (index < S.length) {
    if (!set.has(S[index])) {
      set.add(S[index]);
      console.log(set);
      max = Math.max(max, set.size);
    } else {
      for (let c of set) {
        console.log({ set, c });
        if (c === S[index]) {
          //remove from start add to end of set,
          set.delete(c);
          set.add(S[index]);
          break;
        } else {
          // remove all letter from start until we get to c===S[index]
          set.delete(c);
        }
      }
    }
    index++;
  }
  return max;
};

// Example usage:
const example1 = "abcabcbb";
const example2 = "bbbbb";
const example3 = "pwwkew";

console.log(lengthOfLongestSubstring(example1)); // Output: 3
console.log(lengthOfLongestSubstring(example2)); // Output: 1
console.log(lengthOfLongestSubstring(example3)); // Output: 3
console.log(lengthOfLongestSubstring("x")); // Output: 1
console.log(lengthOfLongestSubstring("aab")); // Output: 2
console.log(lengthOfLongestSubstring("aabbaab")); // Output: 2
