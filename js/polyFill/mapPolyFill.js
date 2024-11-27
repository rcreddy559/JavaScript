// Map polyfill
//
console.log("\n----------Map-----------------");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = nums.map((num, i, nums) => {
  console.log(`num: ${num}, i: ${i}, nums: ${nums}`);
  return num * 2;
});
console.log(`map result: ${result}`);

console.log("\n----------Polyfill Map-----------------");
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

result = nums.myMap((num, i, nums) => {
  console.log(`num: ${num}, i: ${i}, nums: ${nums}`);
  return num * 2;
});
console.log(`myMap result: ${result}`);
