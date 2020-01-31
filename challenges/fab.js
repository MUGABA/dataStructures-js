function improvedFab(a, b, n) {
  let arr = [a, b];
  let current;
  i = 0;
  while (i < n) {
    current = a + Math.pow(b, 2);
    arr.push(current);
    a = b;
    b = current;
    i++;
  }
  return arr[n];
}
console.log(improvedFab(6, 10, 20));
