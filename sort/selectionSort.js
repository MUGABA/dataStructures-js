const swap = (arr, v1, v2) => {
  [arr[v1], arr[v2]] = [arr[v2], arr[v1]];
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
        // console.log(arr[small], arr[i]);
      }
    }
    if (i !== small) swap(arr, i, small);
  }
  return arr;
};

console.log(selectionSort([3, 5, 2, 7, 1]));
