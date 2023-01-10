function check(str, bracketsConfig) {
  const openBrackets = [];

  const findBracketsArr = bracket => bracketsConfig.find(el => el.includes(bracket));
  const isOpen = (bracket, bracketArr, openBrackets) => {
    if (bracketArr.indexOf(bracket) === 0
      && bracketArr.lastIndexOf(bracket) === 0) {
      return true;
    }

    if (bracketArr.indexOf(bracket) === 0
      && bracketArr.lastIndexOf(bracket) === 1
      && !openBrackets.includes(bracket)) {
      return true;
    }

    return false;
  };

  for (let i = 0; i < str.length; i++) {
    if (isOpen(str[i], findBracketsArr(str[i]), openBrackets)) {
      openBrackets.push(str[i]);
    } else {
      if (openBrackets.pop() !== findBracketsArr(str[i])[0]) return false;
    }
  }

  return openBrackets.length === 0;
}

module.exports = check;

console.log(check('||', [['|', '|']]));