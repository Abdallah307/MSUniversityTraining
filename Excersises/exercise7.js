// Write a JavaScript program to reverse a given string.

const revereString = (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

console.log(revereString("sahar"));

//better solution
