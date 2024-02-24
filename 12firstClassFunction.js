// Difference between fucntion statement and function expression is Hoisting. Function statement can be hoisted. But function expression can't br hoisted.

// * Function statement

function a() {
  console.log("a called");
}
a();

// * Function expression

const b = function () {
  //if function stored in a varibale, its function expression
  console.log("b called");
};
b();

// * Function Declaration --> Statement and declaration is the same thing

function a() {
  console.log("a called");
}
a();

// * Anonymous function --> Fucntion which don't have any name/ identity

// function(){   // anonymous functions are used in a place where functions are used as values

// }

// * Named function expression

const c = function xyz() {
  console.log("c called");
};
c(); //c called
xyz(); // reference error. Because its in the local scope of c

// * Differnce between parameters and arguments

const d = function xyz(param1, param2) {
  // param1, param 2 are the parameters
  console.log(param1 + param2);
};
c(1, 2); // this 1 and 2 are the arguments

// * First Class Functions

// When we call a function/ envoke a function, if we pass function as arguments, that is First Class Functions
// The ability to use functions as a value, parameter and can return in another functions, is called  fisrt class functions
// First class citizens is first class functions

const e = function xyz(param1) {
  // param1, param 2 are the parameters
  console.log(param1);
};

function x() {
  console.log("x is called");
}
e(x);

e(function () {
  console.log("Hi");
});

// Arrow functions
