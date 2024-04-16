// if data is 0 then reject with str error
// if data is odd then resolve after 1 sec with str odd
// if data is even number , then reject the promise after 2 sec , with str even
const job = (data) => {
  let promise = new Promise((resolve, reject) => {
    if (data === 0) {
      reject("Error");
    } else if (data % 2 !== 0) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject("Even");
      }, 2000);
    }
  });
  return promise;
};
let testing = job(2);
testing
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
