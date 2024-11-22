function removeDuplicates(arr) {
  var uniqueArr = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], uniqueArr.indexOf(arr[i]));
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

var r = [30, 2, 3, 5, 7, 1, 2, 2, 90, 49];
console.log(removeDuplicates(r.sort()));

var duplicates = [...r];
console.log(duplicates);

duplicates.reduce((accumulator, current) => {
  if (!accumulator.includes(current)) {
    accumulator.push(current)
  }
  return accumulator;

}, []);

console.log(`duplicates: ${duplicates} `);

