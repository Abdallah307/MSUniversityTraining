/*
 Write a JavaScript function that takes an array of numbers 
 and returns a new array with only the even numbers. 
*/

const getEvenNumbers = (numbers) => {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  console.log(evenNumbers);
};

getEvenNumbers([3, 5, 8, 2, 4]);
