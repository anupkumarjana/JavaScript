console.log(a); // undefined.   Because in global execution context a has been allocated some memery.
//But its value is not assigned yet

var a = 10;

console.log(a); // 10

var b;
console.log(b); // undefined.    Because b does not have any value

// JS is loosely typed language / weakly typed lnaguage. We don't have to define its data type

var x;
console.log(x); //undefined

x = 10;
console.log(x); //10

x = "Hi this is x";
console.log(x); //Hi this is x

x = true;
console.log(x); //true
