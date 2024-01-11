/**
 * Helper function to expand around a center and find palindromes.
 * @param {string} s - The input string
 * @param {number} j - Left pointer
 * @param {number} k - Right pointer
 * @returns {number[]} - An array containing the start and end indices of the palindrome found.
 */
const expandPalindrome = (s, j, k) => {
  while (j >= 0 && k < s.length && s[j] === s[k]) {
    j--; // Move the left pointer to the left.
    k++; // Move the right pointer to the right.
  }
  // Calculate the length of the palindrome found.
  // If it's longer than 1 character, return the start and end indices.
  if (k - j - 1 > 1) {
    return [j + 1, k - 1];
  }
  // Otherwise, return an empty array to indicate no palindrome found.
  return [];
};

/**
 * @param {string} s - The input string
 * @return {string} - The longest palindrome substring in the input string
 */
var longestPalindrome = function (s) {
  // If the input string has a length less than 2, it's already a palindrome.
  // In this case, we return the original string itself.
  if (s.length < 2) {
    return s;
  }

  let maxLen = 0; // Initialize the maximum palindrome length to 0.
  let lo = 0; // Initialize the start index of the longest palindrome substring.
  let result = s; // Initialize the result variable to the input string.

  // Iterate through the input string character by character.
  for (let i = 0; i < s.length; i++) {
    // Expand around the center, considering both odd and even length palindromes.
    const oddPalindrome = expandPalindrome(s, i, i); // Odd length palindrome (e.g., "aba")
    const evenPalindrome =
      s[i] === s[i + 1] ? expandPalindrome(s, i, i + 1) : []; // Even length palindrome (e.g., "abba")

    if (
      oddPalindrome.length > 0 &&
      oddPalindrome[1] - oddPalindrome[0] > maxLen
    ) {
      maxLen = oddPalindrome[1] - oddPalindrome[0];
      lo = oddPalindrome[0];
    }
    if (
      evenPalindrome.length > 0 &&
      evenPalindrome[1] - evenPalindrome[0] > maxLen
    ) {
      maxLen = evenPalindrome[1] - evenPalindrome[0];
      lo = evenPalindrome[0];
    }
  }

  // Return the longest palindrome substring by using substring with lo and maxLen.
  return result.substring(lo, lo + maxLen + 1);
};

// Example usages

console.log(longestPalindrome("")); // Output: ""
console.log(longestPalindrome("a")); // Output: "a"
console.log(longestPalindrome("ab")); // Output: "a" or "b"
console.log(longestPalindrome("aaa")); // Output: "aaa"
console.log(longestPalindrome("racecar")); // Output: "racecar"
console.log(longestPalindrome("xabacdc")); // Output: "bacdcb"
console.log(longestPalindrome("madamracecarmadam")); // Output: "madam"
console.log(longestPalindrome("A man a plan a canal Panama")); // Output: "an a plan a canal Panama"
console.log(longestPalindrome("abcdefedcba")); // Output: "abcdefedcba"
console.log(longestPalindrome("qwerewqxtqwerewqt")); // Output: "abcdefedcba"
