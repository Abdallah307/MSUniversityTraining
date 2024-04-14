/*
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let date = new Date();
let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullday, fullMonth;

if (day < 10) {
  fullday = "0" + day;
}
if (month < 10) {
  fullMonth = "0" + month;
}
console.log(fullday + "/" + fullMonth + "/" + year);
