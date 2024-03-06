function sumPrimes(num) {
  let primeSum=0
   function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }

  return primeSum;
}

// sumPrimes(10);
console.log(sumPrimes(10))