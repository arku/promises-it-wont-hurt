'use strict';
const promise = new Promise((fulfill, reject) => {
  setTimeout(() => fulfill('FULFILLED!'), 300);
});

promise
  .then((response) => console.log(response));