reverseWords = (data) => {
  let wordsArray = data.split(" ");
  wordsArray = wordsArray.reverse();
  console.log(wordsArray.join(" "));
};

reverseString = (data) => {
  let array = data.split("");
  let reverse = "";

  for (let i = array.length - 1; i >= 0; i--) {
    reverse += array[i];
  }
  console.log(reverse);
};

reverseStringArray = (data) => {
  let array = data.split("");
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  console.log(array.join(""));
};

reverseString("javascript");
reverseStringArray("javascript");
// reverseWords("test one two");

function del() {
  var x = 10;
  let z = 20;
  if (z == 20) {
    var x = 40;
    var z = 50;
    console.log(`X in fun: ${x}`);
  }
  console.log(`z in fun: ${z}`);
}
del();
console.log(`X: ${x}`);
console.log(`z: ${z}`);
