const fibonacci = function (number) {
  const toNumber = Number(number)
  if (toNumber < 0) {
    return "OOPS"
  } else {
    const newArr = [0, 1]
    for (i = 1; i <= toNumber; i++){
      newArr.push(newArr[i] + newArr[i-1])
    }
    return newArr[toNumber]
  }
};

module.exports = fibonacci
