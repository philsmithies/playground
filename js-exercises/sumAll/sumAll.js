const sumAll = function(num1, num2) {
  total = 0 
  if ((num1 > 0 && num2 > 0) && typeof (num1&&num2) === 'number') {

    if (num1 < num2) {
      for(let i = num1; i <= num2; i++){
        total += i
      }
    } else if (num1 > num2) {
      for(let i = num2; i <= num1; i++){
        total += i
      }
    } 
    return total 
  } else {
    return "ERROR"
  }
}
module.exports = sumAll
