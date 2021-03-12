const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error('Error')};
  let res = [];
  let discard_number = -1;
  const CONTROL_SEQUENCES = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case CONTROL_SEQUENCES[0]:
        discard_number = i + 1;
        break;
      case CONTROL_SEQUENCES[1]:
        if (i != 0 && i-1 != discard_number) {
          res.pop();
        };
        break;
      case CONTROL_SEQUENCES[2]:
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        };
        break;
      case CONTROL_SEQUENCES[3]:
        if (i != 0 && (discard_number != i - 1)) {
          res.push(arr[i - 1]);
        };
        break;
      default:
        if (discard_number != i) {
          res.push(arr[i]);
        };
    };
  };
  return res;
};
