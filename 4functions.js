let x = 10;
a(); // this will be executed first beacuse of hoisting
b(); // this will be executed scecond
console.log(x); // this will be executed third
c(); // this will be last thing to execute

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
3
//Output will be
// 100
// 200
// 10
// 300
