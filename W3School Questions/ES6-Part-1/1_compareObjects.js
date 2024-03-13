// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const compareObjects = (obj, source) => {
  return Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
};

console.log(
  compareObjects(
    { age: 25, hair: "long", beard: true },
    { hair: "long", beard: true }
  )
); // true
console.log(
  compareObjects(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
); // false
console.log(
  compareObjects(
    { hair: "long", beard: true },
    { age: 26, hair: "long", beard: true }
  )
); // false
