const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let currentInput = "";
let operator = "";
let previousInput = "";

// Update the calculator display
function updateDisplay(value) {
  display.value = value;
}

// Handle number button clicks
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.dataset.num;
    updateDisplay(currentInput);
  });
});

// Handle operator button clicks
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput === "") return; // Do nothing if no number yet
    operator = button.dataset.op;
    previousInput = currentInput;
    currentInput = "";
  });
});

// Handle equals (=) button click
equalsButton.addEventListener("click", () => {
  if (currentInput === "" || previousInput === "" || operator === "") return;

  let result = 0;
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") result = b !== 0 ? a / b : "Error";

  updateDisplay(result);
  currentInput = result.toString();
  previousInput = "";
  operator = "";
});

// Handle clear (C) button
clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("");
});
