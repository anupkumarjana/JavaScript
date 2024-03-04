function nonMutatingSplice(cities) {
  const arr= cities.slice(0,3)
  console.log(arr)
  return arr
  // return cities.splice(3);
}
console.log(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]))