const obj = { name: "Ravi" };

function printName(age, marks) {
  name = "Shobha";
  console.log(
    `name: ${this.name}, age: ${age}, innerName: ${name} marks: ${marks}`
  );
}

const funck = printName.bind(obj);

funck(24, 50);

funck(24, 100);
