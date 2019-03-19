const chunkedArr = (arr, len) => {
  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    console.log("--------------->", val);
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];
    console.log("last: ", last);
    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

const arrCh = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];
console.log(arrCh);
console.log(arrCh[arrCh.length - 1]);
const subArray = arrCh[arrCh.length - 1];
subArray.push(10);
console.log(arrCh);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(chunkedArr(arr, 2));
module.exports = chunkedArr;
