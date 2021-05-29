const removeFromArray = function(...args) {
const array = args[0]
return array.filter(value => !args.includes(value))
}

module.exports = removeFromArray
