function uniteUnique(arr, ...args) {
  const uniqueArr = [...new Set(arr)];
  const result = [...uniqueArr];
  for(let i in args){
    for(let j in args[i]){
      if(!result.includes(args[i][j]) ){
        result.push(args[i][j])
      }
    }
  }
  return result;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))