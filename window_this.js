// Even if its empty file,
//there is window object which is given by JS engine.
// And in the window, there is all global functions which we can use to write js codes

// There's also "this" keyword object
// which points to the window

// Whenever any js program is run a golbal object is created and global execution context is created
//along with the execution context, "this" varibale is created

// Whereever the JS code runs, there's always a JS Engine layer. In chrome there's V8,
// Mozilla, Safari have their own

// Every JS engine has responsibility to create these global objects like window, this

console.log(this === window); // in browser console, its true. beacuse this keyword points to window

let a = 10;

function b() {
  let x = 100; // if we go to browser--> console.log(window)==> it will create a global execution context
  console.log(x); // And inside that context a and fucntion b will be there, not x. Because x is local scoped/ fucntion scoped
}

console.log(window.a); // 10
console.log(a); // 10      Even if we did not write window, before a, JS assumes that a will be in global space (window)

console.log(this.a);  //10    because this and window are the same thing.

console.log(x); // x is not defined. JS finds the x in global execution context, but x is a local spaced variable
