//Constructor pattern
const peopleConstructor = function(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.printPerson = function() {
    console.log(
      "Name: " + this.name + ", Age:" + this.age + ",Place:" + this.place
    );
  };
};

let p1 = new peopleConstructor("Ravi", 37, "AP");
let p2 = new peopleConstructor("Jagan", 43, "KA");

// p1.printPerson();
// p2.printPe/rson();

//Factory pattern
const peopleFactory = function(name, age, place) {
  let temp = {};
  temp.name = name;
  temp.age = age;
  temp.place = place;
  temp.printPerson = function() {
    console.log(
      "Name: " + temp.name + ", Age:" + temp.age + ", Place:" + temp.place
    );
  };

  return temp;
};

const f1 = peopleFactory("Divija", 5, "Chittoor");
const f2 = peopleFactory("Jyothis", 8, "Thalapula Palli");

// f1.printPerson();
// f2.printPerson();

// Prototype Object creation pattern
let peoplePrototype = function() {};

peoplePrototype.prototype.name = "";
peoplePrototype.prototype.age = 0;
peoplePrototype.prototype.place = "";
peoplePrototype.prototype.printPerson = function() {
  console.log(
    "Name:" + this.name + ", Age: " + this.age + ", Place: " + this.place
  );
};

let pro1 = new peoplePrototype();
pro1.age = 37;
pro1.name = "Ravi";

pro1.place = "CTR";

pro1.printPerson();
