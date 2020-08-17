function SelectionSortAlgo(array, compare_Function) {
  function comp(a, b) {
    return a - b;
  }
  var min = 0;
  var index = 0;
  var temp = 0;
  compare_Function = compare_Function || compare;
  for (var i = 0; i < array.length; i += 1) {
    index = i;
    min = array[i];
    for (var j = i + 1; j < array.length; j += 1) {
      if (compare_Function(min, array[j]) > 0) {
        min = array[j];
        index = j;
      }
    }
    temp = array[i];
    array[i] = min;
    array[index] = temp;
  }
  return array;
}
console.log(
  SelectionSortAlgo([9, 15, 2, 44, -1, 36, 1], function (a, b) {
    return a - b;
  })
);
