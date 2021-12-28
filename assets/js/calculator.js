class Calculator{

  constructor(){
    this._currentNumber = 0; 
    this._previousNumber = 0;
    this._result = 0;
    this._operator = "";
  }

  add(){
    this._result = this._currentNumber + this._previousNumber; 
  }

  multiply(){
    this._result = this._previousNumber * this._currentNumber;
  }

  substraction(){
    this._result = this._previousNumber - this._currentNumber;
  }

  division(){
    this._result = this._previousNumber / this._currentNumber;
  }
}
