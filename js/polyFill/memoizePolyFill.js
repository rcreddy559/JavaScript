function memoize(fn) {
  let res = {};
  return function (...args) {
    const argsJson = JSON.stringify(args);
    if (!res[argsJson]) {
      res[argsJson] = fn(...args);
    }
    return res[argsJson];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num1 * num2;
};

const myProduct = memoize(clumsyProduct);

console.time("Start time");
console.log(myProduct(22928, 33872));
console.timeEnd("Start time");

console.time("Start time");
console.log(myProduct(22928, 33872));
console.timeEnd("Start time");
