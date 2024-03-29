# Episode 20 : Callback

- There are 2 Parts of Callback:

  1. Good Part of callback - Callback are super important while writing asynchronous code in JS
  2. Bad Part of Callback - Using callback we can face issue:
     - Callback Hell
     - Inversion of control

- Understanding of Bad part of callback is super important to learn Promise in next lecture.

> 💡 JavaScript is synchronous, single threaded language. It can Just do one thing at a time, it has just one call-stack and it can execute one thing at a time. Whatever code we give to Javascript will be quickly executed by Javascript engine, it does not wait.

```js
console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2

// 💡 It is quickly printing because `Time, tide & Javascript waits for none.`
```

_But what if we have to delay execution of any line, we could utilize callback, How?_

```js
console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.
```

### 🛒 e-Commerce web app situation

Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta in cart and now he is placing order. So in backend the situation could look something like this.

```js
const cart = ["shoes", "pants", "kurta"];
// Two steps to place a order
// 1. Create a Order
// 2. Proceed to Payment

// It could look something like this:
api.createOrder();
api.proceedToPayment();
```

Assumption, once order is created then only we can proceed to payment, so there is a dependency. So How to manage this dependency.
Callback can come as rescue, How?

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});
// 💡 Over here `createOrder` api is first creating a order then it is responsible to call `api.proceedToPayment()` as part of callback approach.
```

To make it a bit complicated, what if after payment is done, you have to show Order summary by calling `api.showOrderSummary()` and now it has dependency on `api.proceedToPayment()`
Now my code should look something like this:

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});
```

Now what if we have to update the wallet, now this will have a dependency over `showOrderSummary`

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
// 💡 Callback Hell
```

When we have a large codebase and multiple apis and have dependency on each other, then we fall into callback hell.
These codes are tough to maintain.
These callback hell structure is also known as **Pyramid of Doom**.

Till this point we are comfortable with concept of callback hell but now lets discuss about `Inversion of Control`. It is very important to understand in order to get comfortable around the concept of promise.

> 💡 Inversion of control is like that you lose the control of code when we are using callback.

Let's understand with the help of example code and comments:

```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});

// 💡 So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or never run at all.

// 💡 In next session, we will see how we can fix such problems.
```

> 💡 Async programming in JavaScript exists because callback exits.

more at `http://callbackhell.com/`

# Episode 21 : Promises

> Promises are used to handle async operations in JavaScript.

We will discuss with code example that how things used to work before `Promises` and then how it works after `Promises`

Suppose, taking an example of E-Commerce

```js
const cart = ["shoes", "pants", "kurta"];

// Below two functions are asynchronous and dependent on each other
const orderId = createOrder(cart);
proceedToPayment(orderId);

// with Callback (Before Promise)
// Below here, it is the responsibility of createOrder function to first create the order then call the callback function
createOrder(cart, function () {
  proceedToPayment(orderId);
});
// Above there is the issue of `Inversion of Control`
```

Q: How to fix the above issue?  
_A: Using Promise._

Now, we will make `createOrder` function return a promise and we will capture that `promise` into a `variable`

Promise is nothing but we can assume it to be empty object with some data value in it, and this data value will hold whatever this `createOrder` function will return.

Since `createOrder` function is an async function and we don't know how much time will it take to finish execution.

So the moment `createOrder` will get executed, it will return you a `undefined` value. Let's say after 5 secs execution finished so now `orderId` is ready so, it will fill the `undefined` value with the `orderId`.

In short, When `createOrder` get executed, it immediately returns a `promise object` with `undefined` value. then javascript will continue to execute with other lines of code. After sometime when `createOrder` has finished execution and `orderId` is ready then that will `automatically` be assigned to our returned `promise` which was earlier `undefined`.

Q: Question is how we will get to know `response` is ready?  
_A: So, we will attach a `callback` function to the `promise object` using `then` to get triggered automatically when `result` is ready._

```js
const cart = ["shoes", "pants", "kurta"];

const promiseRef = createOrder(cart);
// this promiseRef has access to `then`

// {data: undefined}
// Initially it will be undefined so below code won't trigger
// After some time, when execution has finished and promiseRef has the data then automatically the below line will get triggered.

promiseRef.then(function () {
  proceedToPayment(orderId);
});
```

Q: How it is better than callback approach?

In Earlier solution we used to pass the function and then used to trust the function to execute the callback.

But with promise, we are attaching a callback function to a promiseObject.

There is difference between these words, passing a function and attaching a function.

Promise guarantee, it will callback the attached function once it has the fulfilled data. And it will call it only once. Just once.

Earlier we talked about promise are object with empty data but that's not entirely true, `Promise` are much more than that.

Now let's understand and see a real promise object.

fetch is a web-api which is utilized to make api call and it returns a promise.

We will be calling public github api to fetch data
https://api.github.com/users/alok722

```js
// We will be calling public github api to fetch data
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);
// User above will be a promise.
console.log(user); // Promise {<Pending>}

/** OBSERVATIONS:
 * If we will deep dive and see, this `promise` object has 3 things
 * `prototype`, `promiseState` & `promiseResult`
 * & this `promiseResult` is the same data which we talked earlier as data
 * & initially `promiseResult` is `undefined`
 *
 * `promiseResult` will store data returned from API call
 * `promiseState` will tell in which state the promise is currently, initially it will be in `pending` state and later it will become `fulfilled`
 */

/**
 * When above line is executed, `fetch` makes API call and return a `promise` instantly which is in `Pending` state and Javascript doesn't wait to get it `fulfilled`
 * And in next line it console out the `pending promise`.
 * NOTE: chrome browser has some in-consistency, the moment console happens it shows in pending state but if you will expand that it will show fulfilled because chrome updated the log when promise get fulfilled.
 * Once fulfilled data is there in promiseResult and it is inside body in ReadableStream format and there is a way to extract data.
 */
```

Now we can attach callback to above response?

Using `.then`

```js
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);

user.then(function (data) {
  console.log(data);
});
// And this is how Promise is used.
// It guarantees that it could be resolved only once, either it could be `success` or `failure`
/**
    A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
 */
```

💡Promise Object are immutable.  
-> Once promise is fulfilled and we have data we can pass here and there and we don't have to worry that someone can mutate that data. So over above we can't directly mutate `user` promise object, we will have to use `.then`

### Interview Guide

💡What is Promise?  
-> Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

-> A container for a future value.

-> **A Promise is an object representing the eventual completion or failure of an asynchronous operation.**

We are now done solving one issue of callback i.e. Inversion of Control

But there is one more issue, callback hell...

```js
// Callback Hell Example
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
// And now above code is expanding horizontally and this is called pyramid of doom.
// Callback hell is ugly and hard to maintain.

// 💡 Promise fixes this issue too using `Promise Chaining`
// Example Below is a Promise Chaining
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    updateWalletBalance(balance);
  });

// ⚠️ Common PitFall
// We forget to return promise in Promise Chaining
// The idea is promise/data returned from one .then become data for next .then
// So,
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });

// To improve readability you can use arrow function instead of regular function
```

# Episode 22 : Creating a Promise, Chaining & Error Handling

###

```js
const cart = ["shoes", "pants", "kurta"];

// Consumer part of promise
const promise = createOrder(cart); // orderId
// Our expectation is above function is going to return me a promise.

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// Above snippet we have observed in our previous lecture itself.
// Now we will see, how createOrder is implemented so that it is returning a promise
// In short we will see, "How we can create Promise" and then return it.

// Producer part of Promise
function createOrder(cart) {
  // JS provides a Promise constructor through which we can create promise
  // It accepts a callback function with two parameter `resolve` & `reject`
  const promise = new Promise(function (resolve, reject) {
    // What is this `resolve` and `reject`?
    // These are function which are passed by javascript to us in order to handle success and failure of function call.
    // Now we will write logic to `createOrder`
    /** Mock logic steps
     * 1. validateCart
     * 2. Insert in DB and get an orderId
     */
    // We are assuming in real world scenario, validateCart would be defined
    if (!validateCart(cart)) {
      // If cart not valid, reject the promise
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345"; // We got this id by calling to db (Assumption)
    if (orderId) {
      // Success scenario
      resolve(orderId);
    }
  });
  return promise;
}
```

Over above, if your validateCart is returning true, so the above promise will be resolved (success),

```js
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId
// ❓ What will be printed in below line?
// It prints Promise {<pending>}, but why?
// Because above createOrder is going to take sometime to get resolved, so pending state. But once the promise is resolved, `.then` would be executed for callback.
console.log(promise);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}
```

Now let's see if there was some error and we are rejecting the promise, how we could catch that?  
-> Using `.catch`

```js
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId

// Here we are consuming Promise and will try to catch promise error
promise
  .then(function (orderId) {
    // ✅ success aka resolved promise handling
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    // ⚠️ failure aka reject handling
    console.log(err);
  });

// Here we are creating Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // Assume below `validateCart` return false then the promise will be rejected
    // And then our browser is going to throw the error.
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}
```

Now, Let's understand the concept of Promise Chaining  
-> for this we will assume after `createOrder` we have to invoke `proceedToPayment`  
-> In promise chaining, whatever is returned from first `.then` become data for next `.then` and so on...  
-> At any point of promise chaining, if promise is rejected, the execution will fallback to `.catch` and others promise won't run.

```js
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    // ✅ success aka resolved promise handling
    // 💡 we have return data or promise so that we can keep chaining the promises, here we are returning data
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    // Promise chaining
    // 💡 we will make sure that `proceedToPayment` returns a promise too
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // ⚠️ failure aka reject handling
    console.log(err);
  });

// Here we are creating Promise
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // Assume below `validateCart` return false then the promise will be rejected
    // And then our browser is going to throw the error.
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return promise;
}

function proceedToPayment(cart) {
  return new Promise(function (resolve, reject) {
    // For time being, we are simply `resolving` promise
    resolve("Payment Successful");
  });
}
```

Q: What if we want to continue execution even if any of my promise is failing, how to achieve this?  
-> By placing the `.catch` block at some level after which we are not concerned with failure.  
-> There could be multiple `.catch` too.
Eg:

```js
createOrder(cart)
  .then(function (orderId) {
    // ✅ success aka resolved promise handling
    // 💡 we have return data or promise so that we can keep chaining the promises, here we are returning data
    console.log(orderId);
    return orderId;
  })
    .catch(function (err) {
    // ⚠️ Whatever fails below it, catch wont care
    // this block is responsible for code block above it.
    console.log(err);
  });
  .then(function (orderId) {
    // Promise chaining
    // 💡 we will make sure that `proceedToPayment` returns a promise too
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
    console.log(paymentInfo);
  })
```

# Episode 23 : async await

###

Topics Covered

- What is async?
- What is await?
- How async await works behind the scenes?
- Example of using async/await
- Error Handling
- Interviews
- Async await vs Promise.then/.catch

Q: What is async?  
A: Async is a keyword that is used before a function to create a async function.

Q: What is async function and how it is different from normal function?

```js
// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.
async function getData() {
  return "Namaste JavaScript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}

//❓How to extract data from above promise? One way is using promise .then
dataPromise.then((res) => console.log(res)); // Namaste JavaScript
```

Another example where `async` function is returning a Promise

```js
const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!!");
});

async function getData() {
  return p;
}
// In above case, since we are already returning a promise async function would simply return that instead of wrapping with a new Promise.
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Promise resolved value!!'}
dataPromise.then((res) => console.log(res)); // Promise resolved value!!
```

Q: How we can use `await` along with async function?  
A: `async` and `await` combo is used to handle promises.

But Question is how we used to handle promises earlier and why we even need async/await?

```js
const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!!");
});

function getData() {
  p.then((res) => console.log(res));
}

getData(); // Promise resolved value!!

//📌 Till now we have been using Promise.then/.catch to handle promise.
// Now let's see how async await can help us and how it is different

// The rule is we have to use keyword await in front of promise.
async function handlePromise() {
  const val = await p;
  console.log(val);
}
handlePromise(); // Promise resolved value!!
```

📌 `await` is a keyword that can only be used inside a `async` function.

```js
await function () {}; // Syntax error: await is only valid under async function.
```

Q: What makes `async`-`await` special?  
A: Let's understand with one example where we will compare async-await way of resolving promise with older .then/.catch fashion. For that we will modify our promise `p`.

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 3000);
});

// Let's now compare with some modification:

// 📌 Promise.then/.catch way
function getData() {
  // JS engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("Hello There!");
}

getData(); // First `Hello There!` would be printed and then after 3 secs 'Promise resolved value!!' will be printed.
// Above happened as Javascript wait for none, so it will register this promise and take this callback function and register separately then js will move on and execute the following console and later once promise is resolved, following console will be printed.

//❓ Problem: Normally one used to get confused that JS will wait for promise to be resolved before executing following lines.

// 📌 async-wait way:
async function handlePromise() {
  // JS Engine will waiting for promise to resolve.
  const val = await p;
  console.log("Hello There!");
  console.log(val);
}
handlePromise(); // This time `Hello There!` won't be printed immediately instead after 3 secs `Hello There!` will be printed followed by 'Promise resolved value!!'
// 💡 So basically code was waiting at `await` line to get the promise resolve before moving on to next line.

// Above is the major difference between Promise.then/.catch vs async-await

//🤓 Let's brainstorm more around async-await
async function handlePromise() {
  console.log("Hi");
  const val = await p;
  console.log("Hello There!");
  console.log(val);

  const val2 = await p;
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();
// In above code example, will our program wait for 2 time or will it execute parallely.
//📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value!!') will get printed immediately.

// Let's create one promise and then resolve two different promise.
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value by p2!!");
  }, 2000);
});

async function handlePromise() {
  console.log("Hi");
  const val = await p;
  console.log("Hello There!");
  console.log(val);

  const val2 = await p2;
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();
// 📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value by p2!!') will get printed immediately. So even though `p2` was resolved after 2 secs it had to wait for `p` to get resolved

// Now let's reverse the order execution of promise and observe response.
async function handlePromise() {
  console.log("Hi");
  const val = await p2;
  console.log("Hello There!");
  console.log(val);

  const val2 = await p;
  console.log("Hello There! 2");
  console.log(val2);
}
handlePromise();
// 📌 `Hi` printed instantly -> now code will wait for 2 secs -> After 2 secs ('Hello There!' 'Promise resolved value by p2!!') will get printed and in the subsequent second i.e. after 3 secs ('Hello There! 2' 'Promise resolved value!!') will get printed
```

Q: Question is Is program actually waiting or what is happening behind the scene?  
A: As we know, Time, Tide and JS wait for none. And it's true. Over here it appears that JS engine is waiting but JS engine is not waiting over here. It has not occupied the call stack if that would have been the case our page may have got frozen. So JS engine is not waiting. So if it is not waiting then what it is doing behind the scene? Let's understand with below code snippet.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value by p1!!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value by p2!!");
  }, 10000);
});

async function handlePromise() {
  console.log("Hi");
  debugger;
  const val = await p;
  console.log("Hello There!");
  debugger;
  console.log(val);

  const val2 = await p2;
  console.log("Hello There! 2");
  debugger;
  console.log(val2);
}
handlePromise();
// When this function is executed, it will go line by line as JS is synchronous single threaded language. Lets observe what is happening under call-stack. Above you can see we have set the break-points.

// call stack flow -> handlePromise() is pushed -> It will log `Hi` to console -> Next it sees we have await where promise is suppose to be resolved -> So will it wait for promise to resolve and block call stack? No -> thus handlePromise() execution get suspended and moved out of call stack -> So when JS sees await keyword it suspend the execution of function till promise is resolved -> So `p` will get resolved after 5 secs so handlePromise() will be pushed to call-stack again after 5 secs. -> But this time it will start executing from where it had left. -> Now it will log 'Hello There!' and 'Promise resolved value!!' -> then it will check whether `p2` is resolved or not -> It will find since `p2` will take 10 secs to resolve so the same above process will repeat -> execution will be suspended until promise is resolved.

// 📌 Thus JS is not waiting, call stack is not getting blocked.

// Moreover in above scenario what if p1 would be taking 10 secs and p2 5 secs -> even though p2 got resolved earlier but JS is synchronous single threaded language so it will first wait for p1 to be resolved and then will immediately execute all.
```

### Real World example of async/await

```js
async function handlePromise() {
  // fetch() => Response Object which as body as Readable stream => Response.json() is also a promise which when resolved => value
  const data = await fetch("https://api.github.com/users/alok722");
  const res = await data.json();
  console.log(res);
}
handlePromise();
```

### Error Handling

While we were using normal Promise we were using .catch to handle error, now in `async-await` we would be using `try-catch` block to handle error.

```js
async function handlePromise() {
  try {
    const data = await fetch("https://api.github.com/users/alok722");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();

// In above whenever any error will occur the execution will move to catch block. One could try above with bad url which will result in error.

// Other way of handling error:
handlePromise().catch((err) => console.log(err)); // this will work as handlePromise will return error promise in case of failure.
```

### Async await vs Promise.then/.catch

What one should use? `async-await` is just a syntactic sugar around promise. Behind the scene `async-await` is just promise. So both are same, it's just `async-await` is new way of writing code. `async-await` solves few of the short-coming of Promise like `Promise Chaining`. `async-await` also increases the readability. So sort of it is always advisable to use `async-await.`

# Episode 24 : Promise APIs (all, allSettled, race, any) + Interview Questions 🔥

###

4 Promise APIs which are majorly used:

- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

💡 One simply doesn't use async/await without knowing promises!

### Promise.all()

> A promise is a placeholder for a value that's going to be available sometime later. The promise helps handle asynchronous operations. JavaScript provides a helper function Promise.all(promisesArrayOrIterable) to handle multiple promises at once, in parallel, and get the results in a single aggregate array.

Q: In what situation one could use above api?  
A: Suppose, you have to make parallel API call and get the result, how one can do? This is where Promise.all can be utilized. It is used to handle multiple promises together.

Promise.all([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume **p1** takes **3 seconds**, **p2** takes **1 second**, **p3** takes **2 seconds**.

In first scenario let's assume all 3 promises are successful. So Promise.all will take **3secs** and will give promise value of result like [val1, val2, val3]. It will wait for all of them to finish then it will collect the results and give array as output.

What if any of the promise gets rejected, for eg: Promise.all([p1, p2, p3]). But this time, p2 get rejected after 1 sec. Thus Promise.all will throw same error as p2 immediately as soon as error happened. It will not wait for other promise to either become success or failure. Moreover, p1 and p2 wont get cancelled as they are already triggered so it may result in success or failure depending upon their fate but Promise.all wont care. So its a situation of or/null.

💡 To conclude, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises. If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise.

### Promise.allSettled()

> Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

Promise.allSettled([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume **p1** takes **3 seconds**, **p2** takes **1 second**, **p3** takes **2 seconds**.

In first scenario let's assume all 3 promises are successful. So Promise.allSettled will take **3secs** and will give promise value of result like [val1, val2, val3]. It will wait for all of them to finish then it will collect the results and give array as output.

What if any of the promise gets rejected, for eg: Promise.all([p1, p2, p3]). But this time, p2 get rejected after 1 sec. Thus Promise.allSettled will still wait for all promises to get settled. So After 3 secs, it will be [val1, err, val3]

💡 Promise.all() -> Fail Fast  
💡 Promise.allSettled() -> Will wait and provide accumulative result

### Promise.race()

> The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise. The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

Promise.race([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume **p1** takes **3 seconds**, **p2** takes **1 second**, **p3** takes **2 seconds**. So as soon as first promise will resolve or reject, it will give the output.

So in Happy scenario, Promise.race will give (val2) as output after 1sec as p2 got resolved at the earliest. Whereas if it would have been failed Promise.race would have still given output after 1 sec but this time with error.

### Promise.any()

> The Promise.any() method accepts a list of Promise objects as an iterable object. If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise.

Promise.any([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume **p1** takes **3 seconds**, **p2** takes **1 second**, **p3** takes **2 seconds**. So as soon as first promise will be successful, it will give the output.

If in above situation what if p2 got rejected, nothing will happen as Promise.any seek for success, so the moment first success will happen that will become the result.

❓ But what if all promises got failed, so the returned result will be aggregated error i.e. [err1, err2, err3].

## Code Examples:

### Promise.all()

```js
// 📌 First Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results); // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
});
```

```js
// 📌 Second Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fail");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err)); // throws error after 1 sec i.e. 'P2 Fails'
```

### Promise.allSettled()

💡This is safest among all Promises API.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// Over here, it will wait for all promises to be either settled or rejected and then return,
/*
    [
      {status: 'fulfilled', value: 'P1 Success'},
      {status: 'fulfilled', value: 'P2 Success'},
      {status: 'rejected', reason: 'P3 Fail'}
    ]
  */
```

### Promise.race()

```js
// 📌 First Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// It will return as soon as first promise is resolved or rejected.
// In above example O/P: "P2 Success"
```

```js
// 📌 Second Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

//After 2 secs O/P: "P3 Fail"
```

Notes:

- Once promise is settled, it means -> got the result. Moreover, settled is broadly divided into two categories:

1. resolve, success, fulfilled
2. reject, failure, rejected

### Promise.any()

```js
// 📌 First Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// It will wait for first settled **success**
// In above, p3 will settled first, but since it is rejected, so it will wait further so at 3rd second it will print "P1 Success"
```

```js
// 📌 Second Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Fail");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// After 5 secs: 'P2 Success'
```

```js
// 📌 Third Scenario

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Fail");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fail");
  }, 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => {
    console.error(err);
    console.error(err.errors); // ['P1 Fail', 'P2 Fail', 'P3 Fail']
  });

// Since all are rejected, so it will give "aggregate error" as output
// AggregateError: All promises were rejected
// To get AggregateError array you need to write "err.errors"
```

### Summary

There are 6 static methods of Promise class:

> Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.

> Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
> status: "fulfilled" or "rejected"
> value (if fulfilled) or reason (if rejected).

> Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.

> Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.

> Promise.resolve(value) – makes a resolved promise with the given value.

> Promise.reject(error) – makes a rejected promise with the given error.
> Of all these, Promise.all is probably the most common in practice.

# Episode 25 : `this` keyword in JavaScript

###

> In JavaScript, the this keyword refers to an object, which object depends on how this is being invoked (used or called).

## `this` in global space

Anything defined globally is said to be in a global space.

```js
console.log(this); // refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment,
```

## `this` inside a function

```js
function x() {
  // the below value depends on strict/non-strict mode
  console.log(this);
  // in strict mode - undefined
  // in non-strict mode - refers to global window object
}
x();
// 💡 Notes:

// On the first go feels like `this` keyword in global space and inside function behaves same but in reality it's different.

// The moment you make JS run in strict mode by using: "use strict" at the top, `this` keyword inside function returns `undefined` whereas global space will still refers to global window object
```

`this substitution` -> According to `this` substitution, if the value of `this` keyword is `null/undefined`, it will be replaced by globalObject only in non-strict mode. This is the reason why `this` refers to global window object inside function in non-strict mode.

💡 So to summarize, the value of `this` keyword inside function is `undefined`, but because of `this substitution` in non-strict mode `this` keyword refers to `globalWindowObject` and in strict mode it will still be `undefined`

`this` keyword value depends on how the `function` is called. For eg:  
In strict mode:

```js
x(); // undefined
window.x(); // global window object
```

## `this` inside a object's method

```js
// `x` key below is a method as per terminology
const obj = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
obj.x(); // value of `this` is referring to current object i.e. `obj`
```

## `call`, `apply` & `bind` methods

> For detail around call, apply and bind method. Refer [here](https://www.youtube.com/watch?v=75W8UPQ5l7k&ab_channel=AkshaySaini).

```js
const student = {
  name: "Alok",
  printName: function () {
    console.log(this.name);
  },
};
student.printName(); // Alok

const student2 = {
  name: "Kajal",
};
student2.printName(); // throw error

// ❓ how to re-use printName method from `student` object
student.printName.call(student2); // Kajal
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object

// So, call, bind and apply is used to set the value of this keyword.
```

## `this` inside arrow function

Arrow function doesn't have their own `this` value, they take the value from enclosing lexical context.

```js
const obj = {
  a: 10,
  x: () => {
    console.log(this); // window object
    // Above the value of `this` won't be obj anymore instead it will be enclosing lexical context i.e. window object in current scenario.
  },
};
obj.x();

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
      // Above the value of `this` will be obj2 as function y's enclosing lexical context is function `x`.
    };
    y();
  },
};
obj2.x();
```

## `this` inside DOM

> It refers to HTML element.

```html
<button onclick="alert(this)">Click Me</button>
<!-- [object HTMLButtonElement] Button element -->
```


