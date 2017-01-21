'use strict';

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onReject = (err) => console.log(err.message);

promise
  .then(console.log, onReject);
