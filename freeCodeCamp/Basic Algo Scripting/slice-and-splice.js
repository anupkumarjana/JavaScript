function frankenSplice(arr1, arr2, n) {
  if(arr2.length===0){
    return arr1
  }
  let prefix=arr2.slice(0,n)
  let suffix=arr2.slice(n)
  let res=[...prefix,...arr1,...suffix]
  // console.log(prefix)
  // console.log(suffix)
  console.log(res);

  return res;
}
// console.log([1,2,3])

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice([1, 2], ["a", "b"], 1)
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)