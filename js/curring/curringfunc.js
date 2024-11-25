//Convert f(a,b,c) into f(a)(b)(c)

function curring(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const total = curring(sum);
console.log(total);

console.log(total(1)(2)(3));

///https://www.youtube.com/watch?v=k5TC9i5HonI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=6
