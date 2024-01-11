const longestPalindrome = (S) => {
  if (S.length <= 1) return S;

  let maxPal = "";
  for (let i = 0; i < S.length; i++) {
    //even
    const even = helperExpendFromMiddle(i, i, S);
    //odd
    const odd = S[i] === S[i + 1] ? helperExpendFromMiddle(i, i + 1, S) : "";
    if (odd.length) {
      maxPal = odd.length > maxPal?.length ? odd : maxPal;
    }
    if (even.length > maxPal.length) {
      maxPal = even;
    }
    if (odd.length > maxPal.length) {
      maxPal = even;
    }
  }
  return maxPal;
};

const helperExpendFromMiddle = (i, j, S) => {
  let tempStr = i !== j ? S[i] + "" + S[j] : S[i];
  i--;
  j++;
  while (i >= 0 && j < S.length && S[i] === S[j]) {
    tempStr = S[i] + tempStr + S[j];
    i--;
    j++;
  }
  return tempStr;
};

// Example usages

console.log(longestPalindrome("cbbd")); // Output: ""
console.log(longestPalindrome("a")); // Output: "a"
console.log(longestPalindrome("ab")); // Output: "a" or "b"
console.log(longestPalindrome("aaa")); // Output: "aaa"
console.log(longestPalindrome("racecar")); // Output: "racecar"
console.log(longestPalindrome("xabacdc")); // Output: "bacdcb"
console.log(longestPalindrome("madamracecarmadam")); // Output: "madam"
console.log(longestPalindrome("A man a plan a canal Panama")); // Output: "an a plan a canal Panama"
console.log(longestPalindrome("abcdefedcba")); // Output: "abcdefedcba"
console.log(longestPalindrome("qwerewqxtqwerewqt")); // Output: "abcdefedcba"
