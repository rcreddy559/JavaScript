var Persion = function(firstName) {
  this.firstName = firstName;
};

Persion.prototype.walk = function() {
  console.log("I am wolking!");
};

Persion.prototype.sayHello = () => console.log("Hello, I'm " + this.firstName);

function Student(firstName, subject) {
  Persion.call(this, firstName);
  this.subject = subject;
}

Student.prototype = Object.create(Persion.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
  console.log(
    "Hello, I'm " + this.firstName + ". I'm studying " + this.subject + "."
  );
};

Student.prototype.sayGoodBy = () => console.log("Goodby!");

const ravi = new Student("Ravi", "German language");
ravi.sayHello();
