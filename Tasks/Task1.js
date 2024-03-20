// function take array as parameter and then retrun a promise that resolve after 3 sec, then print the length of array

const printArrayLength = async (items, callback) => {
  setTimeout(() => {
    callback(items.length);
  }, 3000);
};

printArrayLength(["A", "B", "C"], (length) => {
  console.log(`The array length is: ${length}`);
  console.log("Hello");
});
