const addWAtTheEndOfEachElement = async (elements) => {
  let modifiedArray = elements.map((element) => {
    return element + "W";
  });
  return modifiedArray;
};

const main = async () => {
  const names = ["Asaad", "Ahmad", "Abdallah", "Mohammad", "Ali"];
  const result = await addWAtTheEndOfEachElement(names);
  console.log(result);
};
main();
