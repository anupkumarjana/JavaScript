// In hoisting varibale will not be accessed but functions can be accessed before initialization
// As arrow fucntions are variables, they will also not be executed

getName(); // Hello Anup
console.log(x); //  Cannot access 'x' before initialization

let x = 10;

function getName() {
  console.log("Hello Anup");
}

// --------------------------------------------------

console.log(y); //  Cannot access 'y' before initialization
getName1(); // this will not be executed beacuse the error has happened in above line

let y = 10;

function getName1() {
  console.log("Hello Anup");
}

// ------------------------------------------------------

getName2(); //getName will be considered as a variable and it'll say cannon access before inititalization

console.log(z); // this will not be executed beacuse the error has happened in above line

let z = 10;

const getName2 = () => {
  console.log("Hello Anup");
};
