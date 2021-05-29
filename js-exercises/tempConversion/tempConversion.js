const ftoc = function(number) {
  const conversion = (number - 32) * .5556
  return Math.round(conversion * 10) / 10
}

const ctof = function(number) {
  const conversionFahreinheit = (number * 1.8) + 32
  return Math.round(conversionFahreinheit * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
