const binarySearch = (sortedArr, item) => {
  if (!sortedArr || !item) return;
  const len = sortedArr.length;
  let first = 0,
    last = len - 1,
    middle = Math.floor((first + last) / 2);

  for (let i = 0; i < len; i++) {
    if (sortedArr[middle] !== item && first <= last) {
      if (item > sortedArr[middle]) {
        first = middle + 1;
      } else if (item < sortedArr[middle]) {
        last = middle - 1;
      }
      middle = Math.floor((first + last) / 2);
    }
    if (sortedArr[middle] === item) return middle;
  }
  return -1;
};
console.log(binarySearch([1, 2, 4, 7, 9, 10, 12, 14, 16, 18, 22, 24], 22));
