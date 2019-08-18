const chunckArray = (array, len) => {
  const chunckArray = [];

  array.forEach(value => {
    const local = chunckArray[chunckArray.length - 1];

    if (!local || local.length === len) {
      chunckArray.push([value]);
    } else {
      local.push(value);
    }
  });

  return chunckArray;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(chunckArray(arr, 2));

const removeDuplicates = myArray => {
  console.log(myArray);
  let newArray = [];

  for (var i = 0; i < myArray.length; i++) {
    if (newArray.indexOf(myArray[i]) === -1) {
      newArray.push(myArray[i]);
    }
  }

  console.log(newArray);
};

arr = [1, 2, 3, 4, 5, 2, 5, 1, 9, 6, 6, 7, 8, 9];

// removeDuplicates(arr);

const removeDuplicatesObject = myArray => {
  let obj = {};

  for (let i of myArray) {
    obj[i] = true;
  }

  let newArray = Object.keys(obj);
  console.log(newArray);
};

removeDuplicatesObject(arr);
