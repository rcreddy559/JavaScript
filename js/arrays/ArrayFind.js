const myStr = "findinarray";
const myArray = [...myStr];

const arr = [10, 20, 30, 40, 520, 60, 70, 80, 90];
const x = 50;

//Find x presents in arr array
const find = arr.find(e => e > 70);

console.log(find);

// input array contain some elements.
var array = [2, 7, 8, 9];

// Here find function returns the value of
// the first element in the array that satisfies
// the provided testing function (return element > 4).
var found = array.find(function(element) {
  return element > 4;
});

// Printing desired values.
console.log(found);
