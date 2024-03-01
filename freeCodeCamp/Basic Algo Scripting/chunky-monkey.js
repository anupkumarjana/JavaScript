function chunkArrayInGroups(arr, size) {

  const res=[]

  for(let i=0; i<arr.length; i+=size){
    res.push(arr.slice(i,i+size))
  }
  return res


//   let i=i+size
//   const newArr=arr.slice(i,size)
//   const newArr1=arr.slice(size)

// const resArr=[newArr,newArr1]
//   console.log(newArr)
//   console.log(newArr1)
//   return resArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);