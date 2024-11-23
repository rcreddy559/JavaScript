Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let nums = [1, 2, 3, 4, 5];
const result = nums.myFilter((num, i, mums) => {
  return num < 3;
});
console.log(result);
