/*
Write a JavaScript program to find the maximum number in an array. 
*/

const numbers = [1, 40, 9, 33];

const getMaxNumber = (numbers) => {
  let temp = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > temp) {
      temp = numbers[i];
      //   console.log(numbers[i]);
    }
  }
  console.log("maximum numbes is: " + temp);
};

getMaxNumber(numbers);
