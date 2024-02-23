// Lexical Environment:   Its means Hierarchy
// When a Global Execution context is created, a Lexical Environment is created.
// Lexical Environment is the loacal memory along with its Environment for its parent

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // When its finds this line, it will try to find "b" inside the local scope of c().
    // if its not found then, JS engine goes to the reference of parent of C() which is a()
    // if its found, then it'll log "b", otherwise it'll try to find in the GEC's global environment
    // if its not found there also, then it'll say "b is not defined"
  }
}
a();
