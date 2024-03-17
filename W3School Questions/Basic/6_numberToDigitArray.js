// Write a JavaScript program to convert a specified number into an array of digits.


function digitArrayConverter(num) {
  if (num >= 0 && num < 10) {
    return [num];
  }
  //   let temp = 0;
  let arr = [];
  while (num > 0) {
    let divRes = num % 10;
    arr.unshift(divRes);
    num = Math.floor(num / 10);
  }
  return arr;
}

console.log(digitArrayConverter(1234));
