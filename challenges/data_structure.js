/* big-O notation 
logarithms application of big-O notation 

There are O(1)O(n),O(logn),O(n^2),O(n^3),O(n^n)
where n is the number of inputs
*/

//O(1)
// const n = 6;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

// logariths O(log n)
// this is used to print numbers that are big
/*let arr = [];
const logarithms = n => {
  // this log4(n)
  for (let i = 2; i < n; i = i * 4) arr.push(i);
  console.log(arr.length);
};
logarithms(1000000);*/

// prime numbers
/*
const prime = n => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i = i + 3) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
};

let arr = [];
const allPrimeNums = n => {
  for (let i = 0; i < n; i++) {
    if (prime(i)) arr.push(i);
  }
  return arr;
};
console.log(allPrimeNums(15));

// FACTORIALS OF A NUMBER IN JAVASCRIPT
let arr = [];
const factorial = n => {
  for (let i = 2; i < n; i = i + 1) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(factorial(20));
*/

// ENCODING AND DECODING
// console.log(btoa("HELLO world this is a lovely friday"));

// MATRICES IN JAVASCRIPT
/*const Matrix = (rows, cols) => {
  let createdArray = [rows];
  for (let i = 0; i < cols; i += 1) {
    createdArray[i] = [rows];
  }
  return createdArray;
};
console.log(Matrix(2, 3));
*/
// SAME
/*
const same = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  console.log(arr1);
  console.log(arr2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] ** 2) {
      return false;
    }
  }
  return true;
};
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));
*/
/*
const same = (arr1, arr2) => {
  const forArr1 = {};
  const forArr2 = {};
  for (let val of arr1) {
    forArr1[val] = (forArr1[val] || 0) + 1;
  }
  for (let val of arr2) {
    forArr2[val] = (forArr2[val] || 0) + 1;
  }
  for (let key in forArr1) {
    if (!(key ** 2 in forArr2)) return false;
    if (forArr2[key ** 2] !== forArr1[key]) return false;
  }
  return true;
};
console.log(same([1, 2, 3, 4, 5], [16, 9, 25, 1, 4]));
*/
/*
// anagrams
// naive solution
const anagram = (str1, str2) => {
  str1 = str1.split("").sort();
  str2 = str2.split("").sort();

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
};
console.log(anagram("hello", "heoll"));

// frequency counter method
// to written
const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};
*/

// UNIQUE VALUE IN THE ARRAY

const uniquevalesInArray = arr => {
  let first = 0;
  let second = first + 1;
  while (second < arr.length) {
    if (arr[first] !== arr[second]) {
      first++;
      arr[first] = arr[second];
    }
    second++;
  }
  return first + 1;
};
console.log(uniquevalesInArray([1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6]));
