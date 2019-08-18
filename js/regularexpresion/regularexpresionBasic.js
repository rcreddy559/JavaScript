var str = "aravi";
var patt1 = /[aeiou]*[aeiou]$/gi;

var result = str.match(patt1);
let testResult = patt1.test(str);
console.log(result);
console.log(testResult);
