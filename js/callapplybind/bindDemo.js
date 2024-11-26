const obj = { name: "Ravi" };

function printName(age, marks) {
  name = "Shobha";
  console.log(
    `name: ${this.name}, age: ${age}, innerName: ${name} marks: ${marks}`
  );
}

const fun = printName.bind(obj);

fun(24, 50);

fun(24, 100);
