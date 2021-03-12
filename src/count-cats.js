const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0
  matrix.forEach(arr => {
    res += arr.reduce((count, item) => {
      return item === '^^' ? ++count : count
    }, 0)
  })
  return res
}