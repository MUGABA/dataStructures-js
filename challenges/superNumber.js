// // const sum = n => {
// //   const num = n.toString().split("");
// //   let sums = 0;
// //   for (let i = 0; i < num.length; i++) {
// //     let int = parseInt(num[i]);
// //     sums += int;
// //   }
// //   return sums;
// // };

// // const superNumber = n => {
// //   if (n.toString().split("").length === 1) return n;
// //   return superNumber(sum(n));
// // };
// // console.log(superNumber(7));

// const numSuper = (n, a) => {
//   if (!n || !a) return;

//   if (n.toString().split("").length === 1) return n;
//   // const newVal = n.toString().;
//   let num = n.toString();
//   num = num.repeat(a);

//   const helper = () => {
//     let sums = 0;
//     for (let i = 0; i < num.length; i++) {
//       let int = parseInt(num[i]);
//       sums += int;
//     }
//     return sums;
//   };
//   return numSuper(helper(), a);
// };
// console.log(numSuper(87234, 2));

const sum = s => {
  console.log(s);
  if (s.toString().length === 1) {
    return s;
  }
  const num = s.toString();
  let sums = BigInt(0);
  for (let i = num.length - 1; i >= 0; i--) {
    let int = BigInt(num[i]);
    sums += int;
  }

  console.log(sums);

  return sum(sums);
};
// Complete the digitSum function below.
function digitSum(n, k) {
  let numStr = BigInt(n.toString().repeat(k));
  // if (numStr.toString().length === 1) return numStr;
  return sum(BigInt(numStr));
}
console.log(digitSum(BigInt(9875), 4));
