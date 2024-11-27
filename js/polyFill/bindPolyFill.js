// Apply polyfill
console.log("----------Apply-----------------");
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

function Horse(name, age) {
  const a = Animal.bind(this);
  a(name, age);
  this.sound = "neigh";
}

const horse = new Horse("Raven", 5);
console.log(horse);

console.log("\n----------Polyfill Appky-----------------");
Function.prototype.myBind = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myApply must be called on a function"
    );
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

function Cat(name, age) {
  const a = Animal.myBind(this);
  a(name, age);
  this.sound = "Miyam";
}

const cat = new Cat("bolt", 1);
console.log(cat);
