"use strict";

let a = "Hi there!"; //we didn't initialize the varibale
//in strict more we should follow the proper syntax

function hello() {
  console.log(a);
}

hello();

// ---------------higher order functions-----------------------

// Functions that operate on other functions, either by taking them as arguments or
// by returning them, are called higher-order functions.
// Higher-order functions are a result of functions being first-class-citizens in javascript

function higherOrder2() {
  return function () {
    return function () {
      return "Do anyway";
    };
  };
}
console.log(higherOrder2());
console.log(higherOrder2()());
console.log(higherOrder2()()());
// var x = higherOrder2();
// x()
// Returns "Do something"
