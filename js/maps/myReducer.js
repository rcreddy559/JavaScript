//nums.reducer(cb(accumulator, currentvalue, i), initialvalue)

Array.prototype.myReducer = function (cb, initialvalue) {
  let accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let nums = [1, 2, 3, 4, 5];
let result = nums.myReducer((accumulator, currentvalue, index) => {
  return accumulator + currentvalue;
}, 0);

console.log(result);
