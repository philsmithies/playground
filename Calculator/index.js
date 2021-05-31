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
  operatingElement = `${operator}`
  
  if (firstEntry == true){
    runningTotal = parseInt(b)
    console.log('first move is ' + runningTotal)
    firstEntry = false
    updateField(runningTotal)
  } else {
    if (operator == '+'){
      runningTotal += parseInt(b)
      updateField(runningTotal)
    } else if (operator == '-'){
      runningTotal -= parseInt(b)
      updateField(runningTotal)
    } else if (operator == '*'){
      runningTotal = (runningTotal * parseInt(b))
      updateField(runningTotal)
    } else if (operator == '/'){
      runningTotal /= parseInt(b)
      updateField(runningTotal)
    } 
  }
} 

let numberKeyFunction = function(e) {
  if (e.code === "Enter") finalValue()
  else if (e.code === "KeyC") clearFunction()
  else {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`)
    updateField(key.value)
  }
}

window.addEventListener('keydown', numberKeyFunction, false);

additionKey.addEventListener('click', () =>{
  operate(inputField.value, '+')
  clearField()
  console.log(runningTotal)
})

subtraction.addEventListener('click', () =>{
  operate(inputField.value, '-')
  clearField()
  console.log(runningTotal)
})

multiplication.addEventListener('click', () =>{
  operate(inputField.value, '*')
  clearField()
  console.log(runningTotal)
})

division.addEventListener('click', () =>{
  operate(inputField.value, '/')
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
  if ((inputField.value).length < 9) {
    inputField.value += value
  }
}

function clearField() {
  inputField.value = ''
}

function finalValue() {
  operate(inputField.value, operatingElement)
  console.log(operatingElement)
  console.log('final number is ' + ' ' + runningTotal)
  inputField.value = runningTotal
  firstEntry = true
}

function clearFunction(){
  inputField.value = ''
  runningTotal = 0
  operatingElement = ''
  firstEntry = true
}

// each time that you press the + / - / * etc you should evaluate it and then carry on with the next thing so  
// you aren't pushing to an array but actually evaluating as you go..