// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// Tests
// Passed:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// Passed:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// Passed:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// Passed:All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
// Passed:The first array should remain the same after the function runs.
// Passed:The second array should remain the same after the function runs.




function frankenSplice(arr1, arr2, n) {
  if (arr2.length === 0) {
    return arr1;
  }
  let prefix = arr2.slice(0, n);
  let suffix = arr2.slice(n);
  let res = [...prefix, ...arr1, ...suffix];
  // console.log(prefix)
  // console.log(suffix)
  console.log(res);

  return res;
}
// console.log([1,2,3])

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2], ["a", "b"], 1)
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
