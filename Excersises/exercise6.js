/* Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).*/

const checkPalindrome = (str) => {
  let reveredStr = "";

  for (let i = str.length; i >= 0; i--) {
    reveredStr += str.charAt(i);
  }
  console.log(reveredStr);
  if (str === reveredStr) console.log("palindrome");
  else {
    console.log("Not palindrome");
  }
};

checkPalindrome("LOL");
