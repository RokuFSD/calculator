const calculator = new Calculator();
const buttons = document.querySelector(".calculator__buttons");
const display = document.querySelector(".input__actual");
const previous = document.querySelector(".input__previous");

let currentNumber = "";
let previousNumber = "";

const updateDisplay = () => {
  display.innerHTML = currentNumber;
};

const updatePrevious = (operator) => {
  previous.innerHTML = previousNumber + " " + operator;
};

const numberPulsed = (number) => {
  currentNumber += number;
  calculator._currentNumber = Number(currentNumber);
  updateDisplay();
};

const resolve = ()  => {
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
}


const operatorPulsed = (operator) => {
  if(currentNumber == "") return

  if(previousNumber !== ""){
    resolve();
  }

  calculator._operator = operator;
  previousNumber = currentNumber;
  calculator._previousNumber = Number(previousNumber);
  currentNumber = "";
  calculator._currentNumber = 0;
  updatePrevious(operator);
  console.log(calculator);
};

const getInput = (value) => {
  isNaN(value) ? operatorPulsed(value) : numberPulsed(value);
};

buttons.addEventListener("click", (e) => {
  if (e.target && e.target.tagName == "BUTTON") {
    getInput(e.target.value);
  }
});

