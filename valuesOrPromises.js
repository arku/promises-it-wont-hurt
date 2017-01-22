'use strict';

const attachTitle = name => `DR. ${name}`;
const promise = Promise.resolve('MANHATTAN');

promise
  .then(attachTitle)
  .then(console.log);
