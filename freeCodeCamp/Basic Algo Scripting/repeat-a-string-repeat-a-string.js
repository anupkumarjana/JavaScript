function repeatStringNumTimes(str, num) {
  if(num<=0){
    return ""
  }
  let newStr=""
  for(let i=1; i<=num;i++){
    newStr+=str
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);