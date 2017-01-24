const json = process.argv[2];

function parsePromised(json) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch(err) {
      reject(err);
    }
  });
}

parsePromised(json)
  .then(null, console.log);
