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