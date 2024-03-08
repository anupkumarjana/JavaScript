function diffArray(arr1, arr2) {
  
  const uniqueArr1= arr1.filter(elem=> !arr2.includes(elem))
  const uniqueArr2= arr2.filter(elem=> !arr1.includes(elem))
  const newArr = [...uniqueArr1, ...uniqueArr2];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))