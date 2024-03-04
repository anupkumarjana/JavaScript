function alphabeticalOrder(arr) {
  // Only change code below this line
 let newArr=arr.sort((a,b)=>a===b? 0:a<b?-1:1)
  return newArr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))