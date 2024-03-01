function getIndexToIns(arr, num) {
  if(arr.length===0){
    return 0
  }

  arr.sort((a,b)=>a-b)
  console.log(arr)
  
  let i=0
 while (i < arr.length && arr[i] < num) {
    i++;
  }
  return i;
  // return num;
}

getIndexToIns([40, 60], 50);
getIndexToIns([2, 20, 10], 19) 