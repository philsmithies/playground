const reverseString = function(string) {
  let newStr = ''
  for (i = string.length-1; i >= 0; i--){
    newStr += string[i]
  }
  return newStr
}

module.exports = reverseString
