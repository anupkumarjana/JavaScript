function destroyer(arr, ...args) {
  return arr.filter(elem=> !args.includes(elem))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))