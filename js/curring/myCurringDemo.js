function myCurring(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curried(...args.concat(next));
      };
    }
  };
}

const sum = (a, b, c) => a * b * c;
const total = myCurring(sum);
const result = total(1)(2)(3);
console.log(result);
