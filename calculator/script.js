const result = document.querySelector("#result-number") ;

let value = "0" ;
let value1 = "0" ;
let value2 = "0" ;
let total = "0" ;

let operator = 0 ;

// Function buttons
const clearButton = document.querySelector('.function-button:nth-child(1)');
const backspaceButton = document.querySelector('.function-button:nth-child(2)');
const plusMinusButton = document.querySelector('.function-button:nth-child(3)');
const divideButton = document.querySelector('.math-button:nth-child(4)');
const decimalButton = document.querySelector('.number-button:nth-child(18)');

// Number buttons
const button7 = document.querySelector('.number-button:nth-child(5)');
const button8 = document.querySelector('.number-button:nth-child(6)');
const button9 = document.querySelector('.number-button:nth-child(7)');
const button4 = document.querySelector('.number-button:nth-child(9)');
const button5 = document.querySelector('.number-button:nth-child(10)');
const button6 = document.querySelector('.number-button:nth-child(11)');
const button1 = document.querySelector('.number-button:nth-child(13)');
const button2 = document.querySelector('.number-button:nth-child(14)');
const button3 = document.querySelector('.number-button:nth-child(15)');
const button0 = document.querySelector('.zero');

// Math buttons
const multiplyButton = document.querySelector('.math-button:nth-child(8)');
const subtractButton = document.querySelector('.math-button:nth-child(12)');
const addButton = document.querySelector('.math-button:nth-child(16)');
const equalsButton = document.querySelector('.math-button:nth-child(19)');

function updateDisplay() {
  result.textContent = value ;

  if (value.length > 6) {
    if (value.includes("-")){
      let adjuster = value.length - 6 ;
      value = value.slice(0,1) ;
    }
    else {
    let adjuster = value.length - 6 ;
    value = value.slice(adjuster) ;
    }
  }
}

clearButton.addEventListener ("click", function(){
  value=0 ;
  total=0 ;
  updateDisplay() ;
})

backspaceButton.addEventListener ("click", function(){
  let update = result.textContent.slice(0,-1) ;
  if (update=="") {update = 0 ;}
  value = update ;
  updateDisplay() ;
})

plusMinusButton.addEventListener("click", function(){
  if (value.includes("-")) {
    value = value.slice(1) ;
  }
  else {
    value = "-" + value ;
  }
  updateDisplay() ;
})

divideButton.addEventListener ("click", function(){
  operator = 1 ;
  value1 = value ;
  value = 0 ;
  updateDisplay() ;
})

multiplyButton.addEventListener ("click", function(){
  operator = 2 ;
  value1 = value ;
  value = 0 ;
  updateDisplay() ;
})

subtractButton.addEventListener ("click", function(){
  operator = 3 ;
  value1 = value ;
  value = 0 ;
  updateDisplay() ;
})

addButton.addEventListener ("click", function(){
  operator = 4 ;
  value1 = value ;
  value = 0 ;
  updateDisplay() ;
})

decimalButton.addEventListener("click", function() {
  if (!value.includes(".")) {
    value += "."; 
  }
  updateDisplay();
});


button0.addEventListener ("click", function(){
  if (value==0){
    value = 0 ;
  }
  else {
  value += "0" ;
  }
  updateDisplay() ;
})

button1.addEventListener ("click", function(){
  if (value==0){
    value = 1 ;
  }
  else {
    value += "1" ;
    }
  updateDisplay() ;
})

button2.addEventListener ("click", function(){
  if (value==0){
    value = 2 ;
  }
  else {
    value += "2" ;
    }
  updateDisplay() ;
})

button3.addEventListener ("click", function(){
  if (value==0){
    value = 3 ;
  }
  else {
    value += "3" ;
    }
  updateDisplay() ;
})

button4.addEventListener ("click", function(){
  if (value==0){
    value = 4 ;
  }
  else {
    value += "4" ;
    }
  updateDisplay() ;
})

button5.addEventListener ("click", function(){
  if (value==0){
    value = 5 ;
  }
  else {
    value += "5" ;
    }
  updateDisplay() ;
})

button6.addEventListener ("click", function(){
  if (value==0){
    value = 6 ;
  }
  else {
    value += "6" ;
    }
  updateDisplay() ;
})

button7.addEventListener ("click", function(){
  if (value==0){
    value = 7 ;
  }
  else {
    value += "7" ;
    }
  updateDisplay() ;
})

button8.addEventListener ("click", function(){
  if (value==0){
    value = 8 ;
  }
  else {
    value += "8" ;
    }
  updateDisplay() ;
})

button9.addEventListener ("click", function(){
  if (value==0){
    value = 9 ;
  }
  else {
    value += "9" ;
    }
  updateDisplay() ;
})

function toScientificNotation(total) {
  // Convert the number to scientific notation
  let scientificNotation = total.toExponential();

  // Split the scientific notation into coefficient and exponent
  let [coefficient, exponent] = scientificNotation.split('e');

  // If the length of the coefficient part (including the decimal) is too long
  if (coefficient.length > 6) {
    // Slice off extra digits from the coefficient part
    coefficient = coefficient.slice(0, 3);
    // Reassemble the scientific notation
    scientificNotation = coefficient + 'e' + exponent;
  }

  return scientificNotation;
}

equalsButton.addEventListener ("click",function(){
  value2 = value ;
  if (operator === 1) {
    total = +value1/ +value2 ;
  }
  if (operator === 2) {
    total = +value1 * +value2 ;
  }
  if (operator === 3) {
    total = +value1 - +value2 ;
  }
  if (operator === 4) {
    total = +value1 + +value2 ;
  }

  if (total.toString().length > 6) {
    result.innerText = toScientificNotation(total) ;
  }
  else {
    result.innerText = total ;
  }
  value= "" + total ;
  value1=0;
  value2=0;
})

