const calculator = new Calculator();
const buttons = document.querySelector(".calculator__buttons");
const display = document.querySelector(".input__actual");
const previous = document.querySelector(".input__previous");
const buttonClear = document.querySelector("#btn-clear");
const buttonDelete = document.querySelector("#btn-delete");

let currentNumber = "";
let previousNumber = "";

const updateDisplay = () => {
  if (currentNumber) {
    display.innerHTML = currentNumber;
  } else {
    display.innerHTML = "0";
  }
};

const updatePrevious = () => {
  previous.innerHTML = previousNumber;
};

const numberPulsed = (number) => {
  currentNumber += number;
  calculator._currentNumber = Number(currentNumber);
  updateDisplay();
};

const resolve = () => {
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

  currentNumber = calculator._result;
  updateDisplay();
};

const operatorPulsed = (operator) => {
  if (currentNumber == "") return;

  if (previousNumber !== "") {
    resolve();
  }
  calculator._operator = operator;
  previousNumber = currentNumber;
  calculator._previousNumber = Number(previousNumber);
  currentNumber = "";
  calculator._currentNumber = 0;
  updatePrevious();
  console.log(calculator);
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
  currentNumber = "";
  updateDisplay();
  updatePrevious();
};

const removeLast = () => {
  if (currentNumber) {
    currentNumber = currentNumber.slice(0, -1);
  }
  updateDisplay();
};

buttonClear.addEventListener("click", clear);
buttonDelete.addEventListener("click", removeLast);
