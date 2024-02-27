{
  //this is a block    // it is also called a coumpound statement
  // We group multiple statements in a block so that wer can use it where js expects one statement
  const a = 10;
  console.log(a);
}

if (true) {
  // so this is the block{ } where we group all the const and log statement ans use it in if statement
  const a = 10;
  console.log(a);
}

// ----------------------how let, var, const behave in blocked scope------------------------------
{
  var x = 10; //its global scoped, even if its in the block! We can access anywhere we want
  let y = 20; //blocked scoped in this block, can not be accessed outside
  const z = 30; //blocked scoped in this block, can not be accessed outside
}

console.log(x); //10
console.log(y); // Reference error: y is not defined
console.log(z); // Reference error: z is not defined

// -----------------------Shadowing in JS----------------------------------------

var d = 10;
{
  var d = 100;
  console.log(d); // 100, because in the block "var d" shadows the global "var d". So, the block scope d will replace the value of the global d also.
}

console.log(d); // 100, here also golbal d got shadowed by block scoped d. And they are in the same memory location which is window, global object
// so in the first line d's value was 10 which is stored at the global storage. And in the block, the d's value is 100, so as the both d are in the same global storage, the value of the d=10 will be replaced by d=100.

// So we can say the var is not blocked scoped.

// ----------------------------------------------------------------------------

let x = 10; // this is Script scoped/ other scoped. Not Global Scoped
const y = 10; // this is Script scoped/ other scoped. Not Global Scoped
{
  let x = 20; // this is Blocked Scoped
  const y = 20; // this is Blocked Scoped
  console.log(x); // 20
  console.log(y); // 20
}
console.log(x);  // 10
console.log(y); // 10 


// ------------------------------------------------------------------------------

// let a =10    // this will throw error. this is called illegal shadowing
// {
//     var a=10
// }


let b=20;
function x(){
 var b=100      // this is not throw any error. Because var is function scoped
}

// ---------------------------------------------------------------------

const a =20;
{
    const a=30;
    {
        const a=40;
        console.log(a);     // these blocked are lexical scoped. so this will log the nearest "a" // 40
    }
    console.log(a);  // 30, beacuse its nearest value is 30
}