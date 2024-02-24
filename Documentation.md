### JavaScript Hoisting:

#### 1. Variable Hoisting:

```javascript
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;
```

In JavaScript, variables declared with `let` and `const` are hoisted to the top of their scope but not initialized. This is why trying to access them before the declaration results in an error.

#### 2. Function Hoisting:

```javascript
getName(); // Hello Anup
function getName() {
  console.log("Hello Anup");
}
```

Functions, on the other hand, are fully hoisted, meaning you can use them before the declaration.

#### 3. Arrow Functions and Variables:

```javascript
getName2(); // Error: Cannot access 'getName2' before initialization
console.log(z); // Error: Cannot access 'z' before initialization
const getName2 = () => {
  console.log("Hello Anup");
};
let z = 10;
```

Arrow functions, being similar to variables, also exhibit hoisting behavior. Trying to access them before initialization results in an error.

### Execution Context and Scope:

#### 4. Function Scoped Variables:

```javascript
let x = 10;
a(); // 100
b(); // 200
console.log(x); // 10
c(); // 300

function a() {
  var x = 100;
  console.log(x); // x is function scoped here
}

function b() {
  var x = 200;
  console.log(x); // x is function scoped here
}

function c() {
  var x = 300;
  console.log(x); // x is function scoped here
}
```

JavaScript has function-scoped variables. The variable `x` inside each function is local to that function.

#### 5. Global Object and "this":

```javascript
console.log(this === window); // true in the browser
let a = 10;

function b() {
  let x = 100;
  console.log(x);
}

console.log(window.a); // 10
console.log(a); // 10
console.log(this.a); // 10
console.log(x); // Error: x is not defined
```

In a browser, the global object is `window`. The `this` keyword refers to the global object, and if a variable is not found in the local scope, JavaScript looks for it in the global scope.

### Variable Declaration and Initialization:

#### 6. Variable Declaration and Initialization:

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
console.log(b); // undefined
var b;
```

JavaScript is loosely typed, meaning variables can change types. If a variable is declared but not initialized, it's `undefined`.

```javascript
var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
x = "Hi, this is x";
console.log(x); // Hi, this is x
x = true;
console.log(x); // true
```

Variables can change types dynamically, showcasing JavaScript's weakly typed nature.

Certainly! Below is a README file with your provided comments elaborated and organized:

---

## Lexical Environment:

In JavaScript, a Lexical Environment represents the local memory and its environment hierarchy. When a Global Execution Context is created, it comes with a Lexical Environment, establishing a structured hierarchy.

## Hoisting:

### Variable Hoisting:

```javascript
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;
```

In JavaScript, variables declared with `let` and `const` are hoisted to the top of their scope but not initialized, resulting in an error when accessed before declaration.

### Function Hoisting:

```javascript
console.log(this === window); // true in the browser
let a = 10;

function b() {
  let x = 100;
  console.log(x);
}

console.log(window.a); // 10
console.log(a); // 10
console.log(this.a); // 10
console.log(x); // Error: x is not defined
```

Functions are fully hoisted, allowing them to be used before declaration. The `this` keyword in a browser environment points to the global object (`window`).

### Arrow Functions and Variables:

```javascript
getName2(); // Error: Cannot access 'getName2' before initialization
console.log(z); // Error: Cannot access 'z' before initialization
const getName2 = () => {
  console.log("Hello Anup");
};
let z = 10;
```

Arrow functions, being similar to variables, also exhibit hoisting behavior, resulting in an error if accessed before initialization.

## Execution Context and Scope:

### Function Scoped Variables:

```javascript
let x = 10;
a(); // 100
b(); // 200
console.log(x); // 10
c(); // 300

function a() {
  var x = 100;
  console.log(x); // x is function scoped here
}

function b() {
  var x = 200;
  console.log(x); // x is function scoped here
}

function c() {
  var x = 300;
  console.log(x); // x is function scoped here
}
```

JavaScript has function-scoped variables. The variable `x` inside each function is local to that function.

## Variable Declaration and Initialization:

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
console.log(b); // undefined
var b;
```

JavaScript is loosely typed, allowing variables to change types. If a variable is declared but not initialized, it's `undefined`.

```javascript
var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
x = "Hi, this is x";
console.log(x); // Hi, this is x
x = true;
console.log(x); // true
```

Variables can dynamically change types in JavaScript, showcasing its weakly typed nature.

### Temporal Dead Zone (TDZ):

```javascript
// let, const are not hoisted, this is not right. We can say they are in Temporal Dead Zone

// console.log(a);   // Uncaught ReferenceError: Cannot access 'a' before initialization.
let a = 10;
```

Variables declared with `let` and `const` are not hoisted in the traditional sense. They enter a Temporal Dead Zone where accessing them before declaration results in an error.

### Duplicate Variable Declaration:

```javascript
// syntax error: we cannot declare two values with the same variable name with let or const
let x = 7;
let x = 10;
```

Declaring two variables with the same name using `let` or `const` results in a syntax error.

### Variable Reassignment:

```javascript
// this is valid
let y;
y = 12;
```

Reassigning a value to a declared variable is valid in JavaScript.

### Const Declaration:

```javascript
const t;
t = 100;
// syntax error: Missing initializer in const declaration
```

Declaring a constant variable without an initializer results in a syntax error.

### Syntax Errors:

```javascript
console.log("hello anup");

let x = 7;
let x = 10;
// It'll not execute the log!!! It'll simply throw a syntax error.
```

Syntax errors in JavaScript prevent the execution of the code.

```javascript
const s = 1000;
s = 20;
// Type Error: Assignment to constant variable
```

Assigning a new value to a constant variable results in a Type Error. Constants cannot be reassigned.

## Block Statements and Scope:

### 1. Block Statements:

```javascript
{
  // This is a block, also called a compound statement
  // We group multiple statements in a block to use it where JS expects one statement
  const a = 10;
  console.log(a);
}

if (true) {
  // This is a block where we group const and log statements for use in an if statement
  const a = 10;
  console.log(a);
}
```

Blocks in JavaScript are used to group multiple statements, making them a single statement for contextual usage.

### 2. Scope Behavior of `let`, `var`, `const`:

```javascript
{
  var x = 10; // Global scoped, can be accessed anywhere
  let y = 20; // Block scoped, cannot be accessed outside
  const z = 30; // Block scoped, cannot be accessed outside
}

console.log(x); // 10
console.log(y); // Reference error: y is not defined
console.log(z); // Reference error: z is not defined
```

`var` is not block-scoped and can be accessed globally. `let` and `const` are block-scoped, limiting their accessibility.

### 3. Shadowing in JavaScript:

```javascript
var d = 10;

{
  var d = 100;
  console.log(d); // 100, var d in the block shadows the global var d
}

console.log(d); // 100, global var d gets shadowed by block-scoped d
```

`var` is not block-scoped; hence, it can be shadowed within a block, affecting the global variable.

### 4. Script Scope vs. Block Scope:

```javascript
let x = 10; // Script scoped
const y = 10; // Script scoped

{
  let x = 20; // Block scoped
  const y = 20; // Block scoped
  console.log(x); // 20
  console.log(y); // 20
}

console.log(x); // 10
console.log(y); // 10
```

`let` and `const` have block scope, while `var` would have script (or function) scope.

### 5. Illegal Shadowing:

```javascript
// let a = 10  // This will throw an error; it's called illegal shadowing
// {
//     var a = 10
// }
```

Attempting to declare a variable with `let` in a block where it was already declared with `var` results in an error.

### 6. Function Scoping:

```javascript
let b = 20;

function x() {
  var b = 100; // No error; var is function-scoped
}
```

### 7. Lexical Scoping and Closures:

```javascript
const a = 20;
{
  const a = 30;
  {
    const a = 40;
    console.log(a); // Lexical scoped, prints the nearest "a" value: 40
  }
  console.log(a); // Prints 30; the nearest value is 30
}
```

Lexical scoping keeps track of variables based on their nesting levels, forming a closure.

### 8. Closures:

```javascript
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y; // Function x() returns function y()
}

var z = x();
console.log(z); // Prints the function definition of y
z(); // 10  // Invoking y() where it's stored, remembering its lexical scope reference
```

Uses of closures include Module Design Pattern, Currying, Functions like once, memoize, Maintaining state in Async world, setTimeout(), and iterators.

### 9. Loop Issue and Solution:

```javascript
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hello Anup");
}

x();
```

In this code, `var` causes an issue as it is globally scoped. It prints 6 for every iteration.

### 10. Fixing Loop Issue with `let`:

```javascript
function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hello Anup");
}

y();
```

Using `let` solves the loop issue by creating a new lexical scope for each iteration.

### 11. Fixing Loop Issue with `var` and Closure:

```javascript
function z() {
  for (let i = 1; i <= 5; i++) {
    function closure(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    closure(i); // Creates a new closure with a new copy of i
  }

  console.log("Hello Anup");
}

z();
```

Creating a closure for each iteration solves the loop issue with `var`. Each closure gets a new copy of `i`.

## Function Statement vs. Function Expression:

### 1. Function Statement:

```javascript
// Function statement can be hoisted
function a() {
  console.log("a called");
}
a();
```

Function statements can be hoisted, allowing them to be called before the declaration in the code.

### 2. Function Expression:

```javascript
// Function expression cannot be hoisted
const b = function () {
  console.log("b called");
};
b();
```

Function expressions, stored in variables, cannot be hoisted. They need to be declared before usage.

### 3. Function Declaration:

```javascript
// Function declaration and statement are the same thing
function a() {
  console.log("a called");
}
a();
```

Function declaration and statement are interchangeable; both can be hoisted.

### 4. Anonymous Function:

```javascript
// Anonymous function doesn't have a name or identity
// Used in places where functions are used as values
// Example: callback functions
function() {
  //...
}
```

Anonymous functions are often used as values, such as in callback functions.

### 5. Named Function Expression:

```javascript
const c = function xyz() {
  console.log("c called");
};
c(); // c called
xyz(); // Reference error; xyz is in the local scope of c
```

Named function expressions have a name, but the name is only accessible within the function itself.

### 6. Parameters vs. Arguments:

```javascript
const d = function xyz(param1, param2) {
  console.log(param1 + param2);
};
d(1, 2); // Arguments: 1 and 2
```

Parameters are placeholders in the function definition, and arguments are the values passed during the function call.

## First Class Functions:

### 7. First Class Functions:

```javascript
const e = function xyz(param1) {
  console.log(param1);
};

function x() {
  console.log("x is called");
}

e(x);
e(function () {
  console.log("Hi");
});
```

JavaScript treats functions as first-class citizens, allowing them to be used as values, parameters, and returned in other functions.

## Callback Functions:

### 8. Callback Functions:

```javascript
function x(y) {
  console.log("x called");
  y();
}

x(function y() {
  console.log("y called ");
});

setTimeout(() => {
  console.log("timer");
}, 5000);

document.getElementById("clickMe").addEventListener("click", () => {
  console.log("button clicked");
});
```

Callback functions are functions passed as arguments to other functions. They enable asynchronous behavior in synchronous code.

## JavaScript Single-Threaded Nature:

### 9. JavaScript is Single-Threaded:

- JavaScript is a single-threaded and synchronous language.
- Blocking the main thread can lead to performance issues.

## Event Listeners and Closures:

### 10. Event Listeners and Closures:

- Deep dive into event listeners and closures.
- Understanding scope and closures in the context of event listeners.

## Garbage Collection and Remove Event Listeners:

### 11. Garbage Collection and Remove Event Listeners:

- Adding event listeners is a heavy operation that uses memory.
- Exploring the importance of removing event listeners to avoid memory leaks.

# Event Loop

### Page-1

![Page1](https://github.com/anupkumarjana/JavaScript/blob/main/Event%20Loop/page1.jpg)

Feel free to use this README for your documentation!
