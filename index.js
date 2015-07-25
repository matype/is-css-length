module.exports = function (str) {
  var regexp = [
    /^(\+|-)?([0-9]*\.)?[0-9]+(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/i,
    /^(\+|-)?(0*\.)?0+$/
  ]
  regexp.forEach(function (re) {
    if (re.test(str)) return true
  })

  return false
}
