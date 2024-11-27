//Arrays.filter() polyfill

console.log("\n----------Filter-----------------");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums.filter((num, i, nums) => {
  console.log(`num: ${num}, i: ${i}, nums: ${nums}`);
  return num < 5;
});
console.log(`filter result: ${result}`);

console.log("\n----------Filter polyfill-----------------");
Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("First argument must be a function");
  }

  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

result = nums.myFilter((num, i, nums) => {
  console.log(`num: ${num}, i: ${i}, nums: ${nums}`);
  return num < 5;
});

console.log(`PolyfillmyFilter result: ${result}`);
