let arr = [1, 2, 3];
// console.log(arr.length);
arr[-1] = "1234";
// console.log(arr.length);

const testArry = Array.from({ length: 10 }, (v, i) => i + v);
// console.log(testArry);

const arrMap = new Array(10).fill(0).map((v, i) => i + 10);
// console.log(arrMap);

const a = [1, 1, 2, 2, 3, 4, 5, 5];

//const aUnique = [...new Set(a)];
const aUnique = Array.from(new Set(a));
// console.log(aUnique);

const arrFun = (...x) => {
  x.forEach((y, i) => console.log(i, ":", y));
};

//arrFun(10, 20, 30, 40, 50, 60);
console.log(...a.join(","));
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.max(...a));
