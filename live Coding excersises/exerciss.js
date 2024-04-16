const job = async () => {
  // throw new Error();
  let result = "Hello World";
  return result;
};

const main = async () => {
  try {
    const result = await job();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

main();
