let str = "asdfghjkl";
let arr = [...str];
// console.log(arr.length, str.length);

const x = Array.from("thisisarrayfrom");
// console.log(x);

const fromArray = Array.from({ length: arr.length }, (v, i) => arr[i]);
// console.log(fromArray);

const dupArr = [1, 3, 4, 5, 1, 2, 3, 4];

const unArr = Array.from(new Set(dupArr));
// console.log(dupArr);
// console.log(unArr);

const [one, two] = [10, 20];

console.log(one, two);
