let arr = [1, 2, 3, 4, 5, 6];
let arr2 = arr.map(x => x * 2);
console.log(arr);
console.log(arr2);

let arr3 = [[1], [2], [4, 5]];

console.log("------------------------------------------------------")
arr.fill(99, 2)
arr2.fill(0)
console.log(arr);
console.log(arr2);
let z = true + "10";
console.log(z)
let z1 = 10 + true;
console.log(z1)

console.log("------------------------------------------------------")
/* forEach  skips  undefined values in array  */
const xArray = [];
xArray[4] = 90;
xArray[7] = NaN;
xArray[9] = null;
xArray.forEach((i) => {
    console.log(i)
})
console.log("--")
for (let i = 0; i < xArray.length; i++) {
    console.log(i + ':' + xArray[i]);
}

console.log("------------------------------------------------------");
