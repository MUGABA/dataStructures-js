const linearSearch = (arr, item) => {
  if (!arr || !item) return;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
};
console.log(linearSearch([1, 99, 45, 3, 7], 7));
