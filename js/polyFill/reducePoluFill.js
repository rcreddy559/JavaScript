//recude polyfill
console.log("\n----------Reduce-----------------");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums.reduce((accoumulator, currentValue, indesx) => {
  return accoumulator + currentValue;
}, 0);

console.log(`reduce result: ${result}`);

console.log("\n----------Polyfill Reduce-----------------");

Array.prototype.reduce = function (cb, initialvalue) {
  if (typeof cb !== "function") {
    throw new Error("First argument must be a function");
  }
  if (typeof initialvalue !== "number") {
    throw new Error("Second argument must be a number");
  }

  let accumulator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};
