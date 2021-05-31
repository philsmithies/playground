let runningTotal = 0
let operatingElement = ''
let firstEntry = true

const display = document.getElementById('calculator_display')
const operator = document.getElementById('calculator_operator')
const additionKey = document.getElementById('addition')
const subtraction = document.getElementById('subtraction')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')
const inputField = document.getElementById('inputField')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')


function operate (b, operator) {
  if (firstEntry == true){
    runningTotal = parseInt(b)
    operatingElement = `${operator}`
    console.log('first move is ' + runningTotal)
    firstEntry = false
    updateField(runningTotal)
  } else {
    if (operator == '+'){
      runningTotal += parseInt(b)
      operatingElement = '+'
      console.log('running total' + ' ' + runningTotal)
      updateField(runningTotal)
    } else if (operator == '-'){
      runningTotal -= parseInt(b)
      operatingElement = '-'
      updateField(runningTotal)
    } else if (operator == '*'){
      runningTotal = (runningTotal * parseInt(b))
      operatingElement = '*'
      updateField(runningTotal)
    } else if (operator == '/'){
      runningTotal /= parseInt(b)
      operatingElement = '/'
      updateField(runningTotal)
    } 
  }
} 


let someFunction = function(e) {
  if (e.code === 'Digit1') updateField(1)
  else if (e.code === "Digit2") updateField(2)
  else if (e.code === "Digit3") updateField(3)
  else if (e.code === "Digit4") updateField(4)
  else if (e.code === "Digit5") updateField(5)
  else if (e.code === "Digit6") updateField(6)
  else if (e.code === "Digit7") updateField(7)
  else if (e.code === "Digit8") updateField(8)
  else if (e.code === "Digit9") updateField(9)
  else if (e.code === "Digit0") updateField(0)
  else if (e.code === "Enter") finalValue()
  else if (e.code === "KeyC") clearFunction()
}

// addition.addEventListener('click', someFunction, false);
window.addEventListener('keydown', someFunction, false);

additionKey.addEventListener('click', () =>{
  addition()
})

subtraction.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '-')
  clearField()
  console.log(runningTotal)
})

multiplication.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '*')
  clearField()
  console.log(runningTotal)
})

division.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '/')
  operatingElement
  clearField()
  console.log(runningTotal)
})


equals.addEventListener('click', () =>{
  finalValue()
})

clear.addEventListener('click', () =>{
  clearFunction()
})

function updateField(value){
  inputField.value = value
  display.innerText = value
}

function clearField() {
  inputField.value = ''
}

function finalValue() {
  operate(inputField.value, operatingElement)
  console.log(operatingElement)
  console.log('final number is ' + ' ' + runningTotal)
  updateField(`total is ${runningTotal}`)
  runningTotal = 0
  clearField()
  firstEntry = true
}

function clearFunction(){
  inputField.value = ''
  runningTotal = 0
  operatingElement = ''
  updateField('', '')
  firstEntry = true
}

function addition() {
  updateField(inputField.value)
  operate(inputField.value, '+')
  console.log(operatingElement)
  clearField()
  console.log(runningTotal)
}

// each time that you press the + / - / * etc you should evaluate it and then carry on with the next thing so  
// you aren't pushing to an array but actually evaluating as you go..