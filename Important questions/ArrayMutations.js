// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// Tests
// Passed:mutation(["hello", "hey"]) should return false.
// Passed:mutation(["hello", "Hello"]) should return true.
// Passed:mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// Passed:mutation(["Mary", "Army"]) should return true.
// Passed:mutation(["Mary", "Aarmy"]) should return true.
// Passed:mutation(["Alien", "line"]) should return true.
// Passed:mutation(["floor", "for"]) should return true.
// Passed:mutation(["hello", "neo"]) should return false.
// Passed:mutation(["voodoo", "no"]) should return false.
// Passed:mutation(["ate", "date"]) should return false.
// Passed:mutation(["Tiger", "Zebra"]) should return false.
// Passed:mutation(["Noel", "Ole"]) should return true.


function mutation(arr) {
  if (arr[0].toLowerCase() == arr[1].toLowerCase()) {
    return true;
  }

  const charArr = arr[0].toLowerCase().split("");
  const charArr1 = arr[1].toLowerCase().split("");

  for (let i in charArr1) {
    if (!charArr.includes(charArr1[i])) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);


function mutation(arr) {
  const [str1, str2] = arr.map((str) => str.toLowerCase());
  return [...str2].every((char) => str1.includes(char));
}   