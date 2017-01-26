function all(promiseOne, promiseTwo) {
  return new Promise((resolve, reject) => {
    let count = 0, values = new Array(2);

    function process() {
      if (++count == 2) resolve(values);
    }

    promiseOne.then(res => {
      values[0] = res;
      process();
    });

    promiseTwo.then(res => {
      values[1] = res;
      process();
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
