// In this below code. It should print 1, 2, 3, 4, 5 after 1s, 2s, 3s and so on. But that doesn't happen!! beacuse for loop waits for none. The loop will run first and when the loops is completed i=6. So it will print 6 after respective seconds. Because, in "var", varibale is stored in the same location. Var is global scope.
// Hello Anup
// 6
// 6
// 6
// 6
// 6

// var is global scope. and everytime the loop runs, i refer to the same memory location. and thats why, they print every time 6

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hello Anup");
}

x();

// ----------------------------------------------------------

// But if we use let here, so every time the loop runs, i refer to different memory locations. So it will work correctly as we expected. it will print 1,2,3,4,5 after respective seconds. This setTimeout() form a new closure itself whenever the loop runs in each iteration. That means the copy of i in each iteration is new. It'll make 5 new copies of i. And they form a new closure with each and every function, in our case the setTimeout()

// So basically, let is block scoped. So, every time the loop runs, it creates a new copy of i and its closure with setTimeout().
function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Hello Anup");
}

y();

// -----------------------------------------------------------------
// How can we fix the code with var?

function z() {
  for (let i = 1; i <= 5; i++) {
    function closure(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    closure(i); // Everytime this function is called, the new copy of i in created. And every i will form a new memory space with its closure.
  }

  console.log("Hello Anup");
}

z();
