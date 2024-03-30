// // Problem Statement
/* 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


Tests
Passed:fearNotLetter("abce") should return the string d.
Passed:fearNotLetter("abcdefghjklmno") should return the string i.
Passed:fearNotLetter("stvwx") should return the string u.
Passed:fearNotLetter("bcdf") should return the string e.
Passed:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/
// // Solution-1
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
