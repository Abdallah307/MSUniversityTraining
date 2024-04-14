/*
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38

*/

const date = new Date();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

hours = hours >= 12 ? hours - 12 + "PM" : hours + "AM";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Today is: " + days[day]);
console.log("The Time is: " + hours + " " + minutes + " " + seconds);
