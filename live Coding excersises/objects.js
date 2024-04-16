const home = {
  location: "rafidea",
  space: 123,
};

const changeLocation = (newLocation) => {
  home["location"] = newLocation;
};

const addOwner = (value) => {
  home["owner"] = value;
};

changeLocation("Aqraba");
console.log(home.location);

addOwner("Abdallah");
console.log(home.owner);

console.log(home);
