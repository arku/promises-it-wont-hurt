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

