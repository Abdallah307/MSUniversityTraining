let promise = new Promise(function (resolve, reject) {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Go");
  } else {
    reject("failed");
  }
});

promise
  .then((msg) => {
    console.log("Message: " + msg);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
