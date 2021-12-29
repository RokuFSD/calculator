const calculator = new Calculator();
const buttons = document.querySelector(".calculator__buttons");
const display = document.querySelector(".input__actual");
const previous = document.querySelector(".input__previous");
const buttonClear = document.querySelector("#btn-clear");
const buttonDelete = document.querySelector("#btn-delete");
const buttonEqual = document.querySelector("#btn-equal");
const buttonDot = document.querySelector("#btn-dot");

let currentNumber = "";
let previousNumber = "";

const updateDisplay = () => {
  display.innerHTML = currentNumber;
};

const updatePrevious = () => {
  previous.innerHTML = `${previousNumber} ${calculator._operator} `;
};

const numberPulsed = (number) => {
  currentNumber == "0" ? (currentNumber = number) : (currentNumber += number);
  calculator._currentNumber = Number(currentNumber);
  updateDisplay();
};

const resolve = () => {
  if (calculator._operator == "" || currentNumber == "") return;
  if (calculator._operator == "/" && currentNumber == "0") {
    alert("cant divide by zero");
    return false;
  } else {
    switch (calculator._operator) {
      case "+":
        calculator.add();
        break;
      case "-":
        calculator.substraction();
        break;
      case "*":
        calculator.multiply();
        break;
      case "/":
        calculator.division();
        break;
    }

    currentNumber = parseFloat(String(calculator._result.toFixed(2)));
    previousNumber = "";
    calculator._operator = "";
    updateDisplay();
    updatePrevious();
    return true;
  }
};

const operatorPulsed = (operator) => {
  let canResolve = true;

  if (currentNumber == "") return;

  if (previousNumber !== "") {
    canResolve = resolve();
  }

  if (canResolve) {
    calculator._operator = operator;
    previousNumber = currentNumber;
    calculator._previousNumber = Number(previousNumber);
    currentNumber = "";
    updatePrevious();
  }
};

const getInput = (value) => {
  isNaN(value) ? operatorPulsed(value) : numberPulsed(value);
};

buttons.addEventListener("click", (e) => {
  if (e.target && e.target.hasAttribute("value")) {
    getInput(e.target.value);
  }
});

const clear = () => {
  previousNumber = "";
  currentNumber = "0";
  calculator._operator = "";
  updateDisplay();
  updatePrevious();
};

const removeLast = () => {
  if (currentNumber) {
    currentNumber = currentNumber.slice(0, -1);
    calculator._currentNumber = Number(currentNumber);
  }
  updateDisplay();
};

buttonClear.addEventListener("click", clear);
buttonDelete.addEventListener("click", removeLast);
buttonEqual.addEventListener("click", resolve);
buttonDot.addEventListener("click", () => {
  numberPulsed(".");
});
