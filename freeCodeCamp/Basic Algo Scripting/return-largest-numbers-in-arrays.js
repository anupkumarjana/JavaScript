function largestOfFour(arr) {
  const newArr=[]
  for(let i in arr){
    newArr.push(Math.max(...arr[i]))
    // console.log()
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);