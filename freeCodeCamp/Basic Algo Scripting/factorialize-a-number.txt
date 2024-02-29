function factorialize(num) {
  let fact =1
  for(let i=1; i<num+1; i++){
    fact=fact*i
  }
  return fact;
}

factorialize(5);