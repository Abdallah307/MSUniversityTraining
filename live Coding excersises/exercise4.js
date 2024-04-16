const names = ["Asaad", "Ahmad", "Abdallah", "Mohammad", "Ali"];

const getElementStartsWithS = async (elements) => {
  const result = elements.find((element) => {
    return element.startsWith("S");
  });
  return result;
};

const main = async () => {
  let result = await getElementStartsWithS(names);
  if (!result) {
    console.log("None");
  } else console.log(result);
};
main();
