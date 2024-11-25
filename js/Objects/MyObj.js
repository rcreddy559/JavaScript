const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

console.log("------------------------------------------------------");

let person = { name: "lydis" };
const memeber = [person];
// person.name = null;
console.log(memeber);

console.log("------------------------------------------------------");

const value = { number: 10 };

const multiplied = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiplied();
multiplied();
multiplied(value);
multiplied(value);