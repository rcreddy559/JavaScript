var map = new Map([
  ["first_name", "ravi"],
  ["last_name", "reddy"],
]);

map.set("age", 30);

for (const [key, value] of map) {
  console.log(`key: ${key}, value:${value}`);
}
console.log(map.has("first_name"));
console.log(map.delete("first_name"));
console.log(map.has("first_name"));
console.log(map.clear());
console.log(map.size);

let arr = [1, 2, 3];
function addToArr(value) {
  value.push(4);
  console.log(value); // Output: [1, 2, 3, 4]
}
addToArr(arr);
console.log(arr); // Output: [1, 2, 3, 4]
