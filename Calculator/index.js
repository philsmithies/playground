function operate (b) {
  if (operator == '+'){
    return a + b
  } else if (operator == '-'){
    return a - b
  } else if (operator == '*'){
    return a * b
  } else if (operator == '/'){
    return (a / b).toFixed(3)
  } 
}

const evaluation = []

const addition = document.getElementById('addition')
addition.addEventListener('click', () =>{
  evaluation.push(inputField.value, '+')
  updateField(inputField.value, '+')
  clearField()
  console.log(evaluation)
})

const subtraction = document.getElementById('subtraction')
subtraction.addEventListener('click', () =>{
  evaluation.push(inputField.value, '-')
  updateField(inputField.value, '-')
  clearField()
  console.log(evaluation)
})

const multiplication = document.getElementById('multiplication')
multiplication.addEventListener('click', () =>{
  evaluation.push(inputField.value, '*')
  updateField(inputField.value, '*')
  clearField()
  console.log(evaluation)
})

const division = document.getElementById('division')
division.addEventListener('click', () =>{
  evaluation.push(inputField.value, '/')
  updateField(inputField.value, '/')
  clearField()
  console.log(evaluation)
})

const inputField = document.getElementById('inputField')
inputField.addEventListener('click', () =>{
  console.log('inputField')
})

const equals = document.getElementById('equals')
equals.addEventListener('click', () =>{
  console.log(evaluation.reduce((a, b) => a + b, 0))
})

const clear = document.getElementById('clear')
clear.addEventListener('click', () =>{
  inputField.value = ''
})

const display = document.getElementById('calculator_display')
const operator = document.getElementById('calculator_operator')

function updateField(value, method){
  display.innerText = value
  operator.innerText = method
}

function clearField() {
  inputField.value = ''
}