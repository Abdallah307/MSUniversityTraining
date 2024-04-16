const names = ["Abdallah", "Ali", "Sahar", "Ahmad"];

//spread operator
console.log(names);

const coppyArray = [...names];
console.log(coppyArray);

//rest operator:

const toArray = (...args) => {
  return [...args];
};

const result = toArray(1, 2, 3, 4);
console.log(result);
