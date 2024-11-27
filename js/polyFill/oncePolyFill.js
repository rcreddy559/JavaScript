console.log("----------Polyfill Once-----------------");

function once(func, context) {
  let ran;
  return function (...args) {
    if (func) {
      ran = func.apply(context, args);
      func = null;
      return ran;
    }
  };
}

const hello = once((a, b) => console.log(`Hello ${a} ${b}`));

hello("John", "Smith");
hello("John", "Smith");
hello("John", "Smith");
hello("John", "Smith");
hello("John", "Smith");
