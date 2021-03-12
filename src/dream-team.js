const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = [];

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((element) => {
    if (typeof element === 'string') {
      const res = element.split(/\s/).join('');
      str.push(res[0].toUpperCase());
    }
  });

  str.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }

    return 0;
  });

  str = str.join('');
  return str;
}