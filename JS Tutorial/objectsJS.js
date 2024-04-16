const person = {
  name: "Sahar",
  age: 22,

  getInfo() {
    console.log("Name: " + this.name + " Age: " + this.age);
  },
};

let hoppy = ["Drowing", "Swimming"];

console.log(
  hoppy.map((hoppy) => {
    return hoppy;
  })
);
