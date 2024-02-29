function findLongestWordLength(str) {
 const arr= str.split(" ")
//  console.log(arr)
   let maxi=0
  for(let i in arr){
    // console.log(arr[i].length)
    if(arr[i].length>maxi){
      maxi=arr[i].length;
    }
  }
  return maxi;
  // console.log(maxi)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");