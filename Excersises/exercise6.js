/* Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).*/

const checkPalindrome = (str) => {
  let righToleft = "";
  let leftToRight = str;

  for (let i = str.length; i >= 0; i--) {
    righToleft += str.charAt(i);
  }
  console.log(leftToRight);
  console.log(righToleft);
  if (leftToRight === righToleft) console.log("palindrome");
  else {
    console.log("Not palindrome");
  }
};

checkPalindrome("LOL");
