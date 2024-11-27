// Apply polyfill
console.log("----------Apply-----------------");
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

function Horse(name, age) {
  Animal.apply(this, [name, age]);
  this.sound = "neigh";
}

const horse = new Horse("Raven", 5);
console.log(horse);

console.log("\n----------Polyfill Appky-----------------");
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myApply must be called on a function"
    );
  }

  context.fn = this;
  context.fn(...args);
};

function Cat(name, age) {
  Animal.myApply(this, [name, age]);
  this.sound = "Miyam";
}

const cat = new Cat("bolt", 1);
console.log(cat);
