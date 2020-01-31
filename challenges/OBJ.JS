// function commonChild(s1, s2) {
//   const obj1 = {};
//   const obj2 = {};
//   let count = 0;

//   for (let val of s1) {
//     obj1[val] ? (obj1[val] += 1) : (obj1[val] = 1);
//   }
//   for (let val of s2) {
//     obj2[val] ? (obj2[val] += 1) : (obj2[val] = 1);
//   }
//   for (let key in obj1) {
//     for (let val in obj2) {
//       if (key === val) {
//         console.log(key, val);
//         count++;
//       }
//     }
//   }
//   console.log(obj1);
//   console.log(obj2);
//   console.log(s1.length);

//   return count;
// }
// console.log(commonChild("OUDFRMYMAW", "AWHYFCCMQX"));

const makingAnagrams = (s1, s2) => {
  let numberOfCommon = 0;
  const obj1 = {};
  const obj2 = {};
  for (let val of s1) {
    obj1[val] ? (obj1[val] += 1) : (obj1[val] = 1);
  }
  for (let val of s2) {
    obj2[val] ? (obj2[val] += 1) : (obj2[val] = 1);
  }

  // count common characters in both the strings
  for (let key in obj1) {
    if (key in obj2) {
      if (obj1[key] !== obj2[key]) {
        const small = Math.min(obj1[key], obj2[key]);
        numberOfCommon += small;
      } else {
        numberOfCommon += obj1[key];
      }
    }
  }
  const s1Left = s1.length - numberOfCommon;
  const s2Left = s2.length - numberOfCommon;

  const count = s1Left + s2Left;
  console.log(obj1);
  console.log(obj2);
  console.log(s1.length);
  console.log(s2.length);
  console.log(numberOfCommon);
  console.log(count);
  return count;
};
makingAnagrams(
  "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn",
  "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk"
);



function commonChild(s1, s2) {
  let f = [];
  for (let i = 0; i < s1.length; i++) {
      f.push(new Array(s2.length).fill(0))
      if (s1[i] === s2[0] || s1[0] === s2[0]) f[i][0] = 1;
  }
  for (let i = 0; i < s2.length; i++) {
      if (s2[i] === s1[0] || s1[0] === s2[0]) f[0][i] = 1;
  }
  for (let i = 1; i < s1.length; i++) {
      for (let j = 1; j < s2.length; j++) {
          if (s1[i] === s2[j]) f[i][j] = f[i - 1][j - 1] + 1;
          else f[i][j] = Math.max(f[i - 1][j - 1], f[i][j - 1], f[i - 1][j]);
      }
  }
  return f[s1.length - 1][s2.length - 1];


}
