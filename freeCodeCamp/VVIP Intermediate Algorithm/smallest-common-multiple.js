function smallestCommons(arr) {
  const range=[]
  const [min, max]=arr.sort((a,b)=>a-b)
  for(let i=min; i<=max;i++){
    range.push(i)
  }
  let lcm = range[0];
  for (let i = 1; i < range.length; i++) {
    lcm = (lcm * range[i]) / gcd(lcm, range[i]);
  }

  // Step 3: Return the result
  return lcm;
}

// Helper function to calculate the greatest common divisor (gcd)
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// smallestCommons([1,5]);
console.log(smallestCommons([1,5]))