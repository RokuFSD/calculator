class Calculator{
  constructor(){
    this._accumulator = 0; 
  }

  add(value){
    this._accumulator += + value;
  }

  multiply(value){
    this._accumulator *= value;
  }

  get actualValue(){
    return this._accumulator;
  }

}
