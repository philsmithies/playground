const repeatString = function (string, number) {
  if (number < 0) {
    return 'ERROR'
  } else {
    return string.repeat(number)
  }
}

module.exports = repeatString