function mutation(arr) {

if(arr[0].toLowerCase()==arr[1].toLowerCase()){
    return true
  }

  const charArr=arr[0].toLowerCase().split("")
  const charArr1=arr[1].toLowerCase().split("")
  

  for(let i in charArr1){
    if(!charArr.includes(charArr1[i])){
      return false
    }
    
  }
return true
}

mutation(["hello", "hey"]);