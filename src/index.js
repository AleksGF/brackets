function check(str, bracketsConfig) {
  const openBrackets = [];
  const findBracketsArr = bracket => bracketsConfig.find(el => el.includes(bracket));
  const isOpen = bracket => findBracketsArr(bracket).indexOf(bracket) === 0;
  const isClose = bracket => findBracketsArr(bracket).lastIndexOf(bracket) === 1;

  for (let i = 0; i < str.length; i++) {
    if (isOpen(str[i]) && isClose(str[i])) {
      if (openBrackets.indexOf(str[i]) === -1) {
        openBrackets.push(str[i]);
      } else if (openBrackets.indexOf(str[i]) === openBrackets.length - 1) {
        openBrackets.pop();
      } else {
        return false;
      }
    } else {
      if (isOpen(str[i]) && !isClose(str[i])) {
        openBrackets.push(str[i]);
      }

      if (isClose(str[i]) && !isOpen(str[i])) {
        if (openBrackets.pop() !== findBracketsArr(str[i])[0]) return false;
      }
    }
  }

  return openBrackets.length === 0;
}

module.exports = check;

console.log(check('||', [['|', '|']]));