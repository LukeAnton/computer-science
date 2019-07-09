//
//   func = n => (n * (n + 1)) / 2;
//
// // func = n => {
// //   let total = 0;
// //   for (let i = 1; i <= n; i++) {
// //     total += i;
// //   }
// //   return total;
// // };

sortArray = a => {
  let out = [];
  const oddSort = a.filter(odd => odd % 2 !== 0).sort((x, y) => x - y);
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      out.push(null);
    } else {
      out.push(a[i]);
    }
  }
  for (let o = 0; o < out.length; o++) {
    if (out[o] === null) {
      out[o] = oddSort.shift();
    }
  }
  return out;
};

let t1 = performance.now();
console.log(sortArray([5, 3, 2, 8, 1, 4]));
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
