// Funtion with its lexical scope forms a closure

// A closure is the combination of a function bundled together with reference to its lexical scope

// Interview answer: Functions along with its Lexical scope bundled together is a closure!!

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y; // function x() returning function y()
}

var z = x();
console.log(z); // when we logging the return value of x, that is fucntion y() only
//ƒ y() {
//     console.log(a);
//   }
z(); //10 //---> But when we call the y() where it got stored, it remembers the reference of its lexical scope and finds the a's value

// // Uses of closure
// * Module Design Pattern
// * Currying
// * Functions like once
// * memoize
// * Maintaning state in Async world
// * setTimeout()
// * iterrators
