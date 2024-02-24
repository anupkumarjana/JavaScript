// let, const are not hoisted, this is not right. We can say they are in Temporal Dead Zone

// console.log(a);   //uncaught ReferenceError: Cannot access 'a' before initialization. Beacuse "let and const" stored in a different storage. not in the global window object

console.log(this.a); // undefined
console.log(window.a); // undefined
let a = 10;

var b = 20;

// ------------------------------------------------------------

console.log(d); //undefined  --> Beacuse "var" stored in global window object
console.log(window.b); //undefined  --> Beacuse "var" stored in global window object
let c = 10;

var d = 20;

//---------------------------------------------------------------

//syntax error: we can not declare two values with same variable name with let or const
// let x =7
// let x =10

//-------------------------------------------

// this is valid
let y;
y=12;

// -------------------------------------------------


// const t;
// t=100;

//syntax error: Missing initializer  in const declaration 

// -------------------------------------------------------------

console.log("hello anup")

// let x =7
// let x =10

// it'll not execute the log!!! It'll simply throw an error of syntax error


// ------------------------------------------------------------

const s=1000;
s=20;

//Type Error:  Assigment to constant variabel