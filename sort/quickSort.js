const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }
  swap(arr, start, index);
  return index;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left of the pivotIndex
    quickSort(arr, left, pivotIndex - 1);
    // right of the pivotIndex
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
