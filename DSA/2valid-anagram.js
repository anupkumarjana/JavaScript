// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
   
  }
 console.log(charCount);
  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    // charCount[char]--;
  }
  console.log(charCount)
  return true;
};

console.log(isAnagram("anupaa", "paaanu"));
