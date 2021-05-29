function operate (a, operator, b) {
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