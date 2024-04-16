const person = {
  name: "Sahar",
  age: 22,
};

// normal function
const printName = (personData) => {
  console.log(person.name);
};

// Dstructuring
const printName2 = ({ name }) => {
  console.log(name);
};

const { name, age } = person;
console.log(name, age);
