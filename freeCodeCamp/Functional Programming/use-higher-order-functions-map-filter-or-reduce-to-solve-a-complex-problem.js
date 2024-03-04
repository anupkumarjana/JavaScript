const squareList = arr => {
  // Only change code below this line
  const newArr = arr.filter(elem=> (elem>0 && elem%1==0))
  return newArr.map(elem=>elem*elem)
  // return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);