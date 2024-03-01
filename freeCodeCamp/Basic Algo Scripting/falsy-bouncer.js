function bouncer(arr) {
  const newArr=[]
  arr.map(ele=> Boolean(ele)===true? newArr.push(ele):"")
  return newArr;
}

bouncer([7, "ate", "", false, 9]);