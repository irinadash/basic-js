const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

  module.exports = function dateSample(sampleActivity) {
  const num = parseFloat(sampleActivity)
  const age = num >= 1 && num < 15 ? num : NaN
  if (!isNaN(age) && typeof sampleActivity === "string") {
    return Math.ceil(Math.log(MODERN_ACTIVITY / age) * HALF_LIFE_PERIOD / 0.693)
  } else {
    return false
  }
}
