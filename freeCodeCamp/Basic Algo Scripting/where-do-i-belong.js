function getIndexToIns(arr, num) {
  if(arr.length===0){
    return 0
  }
  // for(let i in arr){
  //   if(arr[i]===num){
  //     return i
  //   }
  // }
  arr.sort((a,b)=>a-b)
  console.log(arr)

  // let min =0
  let i=0
  // let j = arr.length
 while (i < arr.length && arr[i] < num) {
    i++;
  }

  return i;
  // return num;
}

getIndexToIns([40, 60], 50);
getIndexToIns([2, 20, 10], 19) 