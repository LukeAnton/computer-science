function func(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(func(100000000000));
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//Using built in timing functions to test run time of algorithms
//t1 stores the time before the function is executed,
//then call the function!
// Once the function has finished execution the time is stored again in t2.
// t2 - t2 is the time to execute.
