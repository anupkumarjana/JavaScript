// * Callback functions

// JS is a synchronus lnaguage. But with the help of callbacks we can make happen asynchronus events in synchronus code

function x(y) {
  console.log("x called");
  y();
}

x(function y() {
  console.log("y called ");
});

setTimeout(() => {
  // beacuse of this call back function in settimeout js are able to perform async tasks. printing 5s later
  console.log("timer");
}, 5000);

document
  .getElementById("clickMe") // whenever we click the button, then callback function will be stored in the call stack and will be executed
  .addEventListener("click", () => {
    console.log("button clicked");
  });

// * JavaScript is a single threaded and synchronous language

// * Blocking the main thread

// * Power of callbacks

// * Deep about event listeners

// * Closures demo with event listeners

// * Scope demo with evenet listeners

// * Garbage collections and remove event listeners
// adding event listener is a heavy operation. Like the call back functions remenbers its lexical scope and cab take lot of memory. So we need to remove event listeners
