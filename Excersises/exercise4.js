/*
  Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
*/
const a = 5;
const b = 6;
const c = 7;

const triangleAreaCalculator = (a, b, c) => {
  let s = 0.5 * (a + b + c);
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log("The area of the triangle: " + area);
};

triangleAreaCalculator(a, b, c);
