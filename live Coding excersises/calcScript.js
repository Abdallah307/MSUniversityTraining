const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clear = document.getElementById("clear");

function handleClickButtons(event) {
  const buttonClicked = event.target;
  if (buttonClicked.classList.contains("clear")) {
    clearDisplay();
  }
}
