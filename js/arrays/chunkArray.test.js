const chunkedArr = require("./chunkArray");

test("chunk array creating", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(chunkedArr(arr, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
});
