function dropElements(arr, func) {

  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Remove elements from the beginning until the condition is met
  }
  return arr;
//   let res=[]
//   let drop=true
//   for(let i=0; i<arr.length; i++){
//   if(func(arr[i]) && drop){
//     res.push(arr[i])
//   }else{
//     drop=false
//   }
// }
//   return res;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))