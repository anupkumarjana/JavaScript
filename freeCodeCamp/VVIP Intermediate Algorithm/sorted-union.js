// // Problem Statement
/* 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Tests
Passed:uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
Passed:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
Passed:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
Passed:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
Passed:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
*/

// // Solution-1
function uniteUnique(arr, ...args) {
  const uniqueArr = [...new Set(arr)];
  const result = [...uniqueArr];
  for (let i in args) {
    for (let j in args[i]) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

// // Solution-2
function uniteUnique(...arr) {
  const res = [];
  const newSet = new Set();
  arr.map((array) => array.map((ele) => newSet.add(ele)));
  console.log(newSet);
  for (let element of newSet) {
    res.push(element);
  }
  console.log(res);
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
