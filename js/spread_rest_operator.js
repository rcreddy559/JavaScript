console.log("========= Spread Operator ========");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const result = [...arr1, ...arr2];
console.log(result);

console.log("------------------------------------------");

const obj1 = { name: 'ravi', age: 30 };
const obj2 = { name: 'shobha', age: 20, firstName: 'R' }

const resultObj = { ...obj1, ...obj2 }
console.log(resultObj);
console.log("------------------------------------------");

const sum = (a, b, c, d, e) => a + b + c + d + e;
console.log(sum(...arr1));
console.log("------------------------------------------");

const sumAll = (...numbers) => {
    return numbers.reduce((accmulator, current) => accmulator + current, 0)
}
console.log(`Sume All: ${sumAll(...arr1)}`);
console.log("------------------------------------------");

const fruits = ['apple', 'banana', 'cherry', 'date'];
const [first, second, ...restAll] = fruits;
console.log(first, second, restAll);


