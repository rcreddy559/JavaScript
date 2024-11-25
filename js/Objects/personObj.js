function changeAgeAndReference(person) {
  person.age = 30;
  person = { name: "rr", age: 70 };
  return person;
}

const person = { name: "lydis", age: 20 };
const person2 = changeAgeAndReference(person);

// console.log(person);
// console.log(person2);

console.log("------------------------------------------------------");

username = "rrr";
let user = {
  username: "lydis",
  password: "1234",
  email: "lydis@me.com",
  age: 20,
  getDetainls: function () {
    const username = "divija";
    const innerArro = () => console.log(username);
    console.log(`User: ${username}, Age: ${this.age}`);
    innerArro();
  },
};

user.getDetainls();
