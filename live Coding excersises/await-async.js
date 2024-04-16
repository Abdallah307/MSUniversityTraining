async function myFunction(str) {
  if (str.startsWith("H")) {
    return true;
  } else {
    return false;
  }
}

async function main() {
  const isStartsWithH = await myFunction("Hello");
  console.log(isStartsWithH);
  console.log("hello");
}
main();
