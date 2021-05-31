let runningTotal = 0
let operatingElement = ''
let firstEntry = true

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


const addition = document.getElementById('addition')

addition.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '+')
  console.log(operatingElement)
  clearField()
  console.log(runningTotal)
})

let someFunction = function(e) {
  if (e.code === 'Digit1') updateField(1)
  else if (e.code === "Digit2") updateField(2)
  else if (e.code === "Digit3") console.log(3)
  else if (e.code === "Digit4") console.log(4)
  else if (e.code === "Digit5") console.log(5)
  else if (e.code === "Digit6") console.log(6)
  else if (e.code === "Digit7") console.log(7)
  else if (e.code === "Digit8") console.log(8)
  else if (e.code === "Digit9") console.log(9)
  else if (e.code === "Digit2") console.log(2)
}

// addition.addEventListener('click', someFunction, false);
window.addEventListener('keydown', someFunction, false);

const subtraction = document.getElementById('subtraction')
subtraction.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '-')
  clearField()
  console.log(runningTotal)
})

const multiplication = document.getElementById('multiplication')
multiplication.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '*')
  clearField()
  console.log(runningTotal)
})

const division = document.getElementById('division')
division.addEventListener('click', () =>{
  updateField(inputField.value)
  operate(inputField.value, '/')
  operatingElement
  clearField()
  console.log(runningTotal)
})

const inputField = document.getElementById('inputField')

const equals = document.getElementById('equals')
equals.addEventListener('click', () =>{
  operate(inputField.value, operatingElement)
  console.log(operatingElement)
  console.log('final number is ' + ' ' + runningTotal)
  updateField(`total is ${runningTotal}`)
  runningTotal = 0
  clearField()
  firstEntry = true
})

const clear = document.getElementById('clear')
clear.addEventListener('click', () =>{
  inputField.value = ''
  runningTotal = 0
  operatingElement = ''
  updateField('', '')
  firstEntry = true
})

const display = document.getElementById('calculator_display')
const operator = document.getElementById('calculator_operator')

function updateField(value){
  display.innerText = value
}

function clearField() {
  inputField.value = ''
}

// each time that you press the + / - / * etc you should evaluate it and then carry on with the next thing so  
// you aren't pushing to an array but actually evaluating as you go..