const number = [4, 6, 99, 33, 54, 23, 6, 88, 90, 68, 40];

const min = Math.min.apply(null, number);
const max = Math.max.apply(null, number);
console.log(`min: ${min}, max: ${max}`);

// const min = Math.min(...number);
// const max = Math.max(...number);
// console.log(`min: ${min}, max: ${max}`);
