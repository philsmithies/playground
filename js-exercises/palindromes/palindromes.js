const palindromes = function (word) {
  let removePunctuation = word.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
  let flattenedWord = removePunctuation.replace(/ /g, '').toLowerCase()
  let newWord = ''

  for (let i = flattenedWord.length - 1; i >= 0; i--){
    newWord += flattenedWord[i]
  }
  if (newWord == flattenedWord) {
    return true 
  } else { 
    return false 
  }
};


module.exports = palindromes
