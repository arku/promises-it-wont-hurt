'use strict';

const resolved = Promise.resolve('SUCCESS!');
const rejected = Promise.reject(new Error('ERROR'));

resolved
  .then(console.log);

rejected
  .catch((err) => console.log(err.message));