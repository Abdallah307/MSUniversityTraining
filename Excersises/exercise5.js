/*
Write a JavaScript program to find the maximum number in an array. 
*/

const numbers = [1, 40, 9, 33];

const getMaxNumber = (numbers) => {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      //   console.log(numbers[i]);
    }
  }
  console.log("maximum numbes is: " + max);
};

getMaxNumber(numbers);
