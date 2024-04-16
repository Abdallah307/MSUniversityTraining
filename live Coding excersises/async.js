const numbers = [-1, -7, 8, 5];

removeNegative = (arr, callback) => {
  const positive = [];
  for (const x of arr) {
    if (callback(x)) {
      positive.push(x);
    }
  }
  return positive;
};

const positiveNumbers = removeNegative(numbers, (x) => x > 0);

console.log(positiveNumbers);
