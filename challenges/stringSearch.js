const stringPattern = (string, patern) => {
  let count = 0;
  let i = 0;
  while (i < string.length) {
    for (let j = 0; j < patern.length; j++) {
      if (string[i + j] !== patern[j]) break;
      if (j === patern.length - 1) count++;

      //   if (string[i + j] !== patern[j]) break;
      //   if (string[i] === patern[j]) {
      //     i++;
      //     if (j === patern.length - 1) count++;
      //   }
    }
    i++;
  }
  return count;
};
console.log(stringPattern("hello", "el"));

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
