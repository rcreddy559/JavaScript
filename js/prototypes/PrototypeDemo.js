class Student {
  constructor(name, gendar) {
    this.name = name;
    this.class = gendar;
  }
}

let rama = new Student("ravi", "A1");
rama.age = 29;
console.log(rama);

Student.prototype.age = 0;
let krishna = new Student("Krishna", "B1");
console.log(krishna.age);
krishna.age = 30;
console.log(krishna);

krishna.__proto__.address = "India";
console.log(krishna.address);
console.log(rama.address);

console.log(Student.prototype == krishna.__proto__);
