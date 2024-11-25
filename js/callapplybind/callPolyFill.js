console.log(
  "--------------------- Call ---------------------------------------------"
);
const car = {
  brand: "Ford",
  model: "Mustang",
  year: 1964,
};

function purchaseCar(currency, price) {
  console.log(
    `I have Purchased a ${this.brand} ${this.model} in ${this.year} car for ${currency} ${price}`
  );
}

purchaseCar.call(car, "USD", 1000);
console.log(
  "\n-----------------------Polyfill for Call-------------------------------"
);
Function.prototype.myCallPolyfill = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myCallPolyfill must be called on a function"
    );
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCallPolyfill(car, "USD", 1000);
console.log(
  "\n---------------------Polyfill for Apply-----------------------------"
);
Function.prototype.myApplyPolyfill = function (context = {}, args = []) {
  console.log(`typeof this: ${typeof this}`);

  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myApplyPolyfill must be called on a function"
    );
  }

  if (args.length === 0) {
    throw new TypeError(
      "Function.prototype.myApplyPolyfill must be called with an array"
    );
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApplyPolyfill(car, ["USD", 1000]);

console.log(
  "\n---------------------Polyfill for bind-----------------------------"
);
Function.prototype.myBindPolyfill = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myBindPolyfill must be called on a function"
    );
  }

  const fn = this;
  return function (...nextArgs) {
    fn.apply(context, args.concat(nextArgs));
  };
};

const boundPurchaseCar = purchaseCar.myBindPolyfill(car, ["USD", 1000]);
boundPurchaseCar();
