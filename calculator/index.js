//this will be the id attributes from html, where can be easy to access 
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

// When a number button is clicked, add its value to the current input and show it
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.dataset.num;
    updateDisplay(currentInput);
  });
});

// When an operator is clicked, store the current number and the operator, then reset currentInput for the next number
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

  // Perform the calculation using the previous number, the current number, and the selected operator
  let result = 0;
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  // Perform the calculation based on the selected operator
  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") result = b !== 0 ? a / b : "Error"; 

 // Show the result on the display and prepare for the next input
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
