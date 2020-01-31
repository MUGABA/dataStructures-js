const swap = (arr, v1, v2) => {
  [arr[v1], arr[v2]] = [arr[v2], arr[v1]];
};
let count = 0;
const bubbleSort = arr => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};
console.log(bubbleSort([9, 1, 2, 3, 4, 5]));
