// Call polyfill
console.log("\n----------Call-----------------");
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

function Horse(name, age) {
  Animal.call(this, name, age);
  this.sound = "neigh";
}

const horse = new Horse("Raven", 5);
console.log(horse);

console.log("\n----------Polyfill Call-----------------");
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(
      "Function.prototype.myCall must be called on a function"
    );
  }
  context.fn = this;
  context.fn(...args);
};

function Cat(name, age) {
  Animal.myCall(this, name, age);
  this.sound = "Miyam";
}

const cat = new Cat("bolt", 1);
console.log(cat);
