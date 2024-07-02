/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText;

    if (value === "C") {
      currentInput = "";
      display.innerText = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
      } catch (error) {
        display.innerText = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
