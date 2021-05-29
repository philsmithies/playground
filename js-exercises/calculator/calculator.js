function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (arr) {
  if (arr.length < 1)
    return 0 
  else 
	return arr.reduce(( acc, current  ) => acc + current, 0 )
}

function multiply (array) {
  let acc = 1
  for(let i = 0; i < array.length; i++){
    acc = acc * array[i]
  }
  return acc
}

function power(a, b) {
  let acc = 1
  for(let i = 0; i < b; i++){
    acc = acc * a
  }
  return acc
}

function factorial(a) {
  acc = 1
  while(a > 0){
    acc *= a
    a = a - 1
  }
  return acc
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
