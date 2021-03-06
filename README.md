# Promise - It won't hurt

This repo hosts my solutions for the [NodeSchool](https://nodeschool.io) workshopper [Promise - It won't hurt](https://github.com/stevekane/promise-it-wont-hurt)

### 1. Warmup
  For this first lesson, let’s review what we already know about asynchronous
  operations in JavaScript.

  Using `setTimeout`, print the string `'TIMED OUT!'` after 300ms.

  [Solution](warmup.js)

### 2. Fulfill a promise
  Create a promise. Have it fulfilled with a value of `'FULFILLED!'` in executor after a delay of 300ms, using `setTimeout`.

  Then, print the contents of the promise after if has been fulfilled by passing `console.log` to then.

  **Boilerplate**

    'use strict';
    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
    });

  [Solution](setTimeoutPromise.js)

### 3. Reject a promise

  Create a promise that after a delay of 300ms, rejects with an `Error` object.
  The Error object should be constructed with parameter `'REJECTED!'`, which is the textual message of the error.

  Create a function onReject to print `error.message` using `console.log`. Pass this function as a rejection handler to the then method of your promise.

  [Solution](rejectPromise.js)

### 4. To reject or not to reject

  Let’s build a simple script to prove to ourselves that promises may only resolve one time and all future attempts to resolve them will simply be ignored.

  First, create a promise using the Promise constructor as we have been doing.

  In the promise’s executor, immediately attempt to fulfill the promise with a value of `'I FIRED'`.

  Then, after the fulfill call, immediately try to reject the promise with an `Error` created with parameter `'I DID NOT FIRE'`.

  After the promise creation, create a function `onRejected` with one parameter error that prints the `Error`’s message with `console.log`.

  Lastly, pass `console.log` and the function you just created as the success and rejection handlers respectively.

  If successful, your script should only log “I FIRED” and should not log “I DID NOT FIRE”.

  Note that unlike the prior exercises, you do not have to use `setTimeout` with this.

  [Solution](rejectOrNot.js)

### 4. Always asynchronous

  In this lesson, we are going to prove to ourselves that promises are always asynchronous.

  First, create a promise using the Promise constructor.

  In the promise’s executor, immediately fulfill the promise with a value of `'PROMISE VALUE'`.

  After the creation of the promise, pass `console.log` as the success handler to the promise.

  Finally, print out “MAIN PROGRAM” with `console.log`.

  [Solution](alwaysAsync.js)

### 5. Shortcuts

  Explore the following three functions
 
  - `catch`
  - `Promise.resolve`
  - `Promise.reject`

  [Solution](shortcuts.js)

### 6. Promise after promise

  This task will allow you to demonstrate an understanding how to chain promises together using then.

  Call first function in your program. `first()` will return a promise that will be fulfilled with a secret value.

  Call second with the fulfilled value of first. Return the promise returned by second in your `onFulfilled` callback.

  Finally, print the fulfilled value of that new promise with `console.log`.

  [Solution](chainingPromises.js)

### 7. Values or promises

  Construct a promise chain that returns values to prove to yourself that promise handlers will wrap your returned values in promises allowing additional chaining.

  * Declare a function `attachTitle` which prepends `'DR. '` to its first argument and returns the result.
  * Create a fulfilled promise with a value of `'MANHATTAN'`.
  * Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`.

  [Solution](valuesOrPromises.js)

### 8. Throw an error

  Some invalid JSON will be available on process.argv[2].

  * Build a function called `parsePromised` that creates a promise, performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejects the promise depending on whether an error is thrown.

  **Note:** your function should synchronously return the promise!
  * Build a sequence of steps like the ones shown above that catches xany thrown errors and logs them to the console.

  [Solution](catchInPromises.js)

### 9. There's always a catch

  * Create a function `alwaysThrows` that throws an `Error` with text `"OH NOES"`;
  * Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1;
  * Create a promise chain that wraps your iterate method using Q's`fcall` then a series of iterations that attempts to perform `iterate`a total of 10 times.
  * Attach `console.log` as a rejection handler at the bottom of yourchain.
  * Insert a call to `alwaysThrows` after your 5th call of `iterate`

  If you have done this correctly, your code should print 1,2,3,4,5,"[Error: OH NOES]".  It's important to notice that the thrown exception was turned into a rejected promise which caused the rejected promise to travel down the promise chain to the first available rejection handler.

  [Solution](rejectionHandler.js)

### 10. Multiple Promises

  Create a function `all` that accepts two promises as arguments. This all function should do all of the following:

  Create an internal promise in whatever way you see fit.

  Create a counter variable with initial value of 0.

  Attach then fulfillment handlers to both promises and increment the internal counter when the handlers are called.

  When the counter reaches 2, fulfill the internal promise with an array containing both values.

  Finally return that internal promise to the user.

  After you finish writing your `all` function, pass `getPromise1()` and `getPromise2()` into your new function and then attach `console.log` as a fulfillment handler to the promise returned by your function. These two promise-returning functions will be provided to you in the global scope.

  [Solution](multiplePromises.js)

### 11. Fetch JSON

  Fetch JSON fromal [http://localhost:1337](http://localhost:1337) using `q-io` module and console.log it.

  There are several things you will want to know:

  * `q-io`'s `http` module has a `read` method which returns a promise for the content of a successful (status 200) HTTP request.
  * Parse the returned JSON and `console.log` it for much win.

  [Solution](fetchJSON.js)

### 12. Do some work

  Let's talk to two remote processes over HTTP being run by your friend and mine, "localhost".

  * Port 7000: Faux session cache (Redis or some such thing)
  * Port 7001: Faux database (MongoDB, LevelDB, Postgres, etc)

  As in the previous lesson, use the q-io module to create promises as wrappers for HTTP responses.
  Hint: You will probably need more than one promise…

  * Send an HTTP GET request to the session cache on port 7000.  A string will be returned to you representing a user ID.
  * Grab that ID from the session response and send an HTTP GET request to your database on port 7001 to the url `localhost:7001/<id>`.
  * If successfully done, your database will return a user object.`console.log` it to win many nerd-points.

  [Solution](doSomeWork.js)
