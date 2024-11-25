const obj = { name: "Ravi" };

function printName(age) {
  name = "Shobha";
  console.log(`name: ${this.name}, age: ${age}, innerName: ${name}`);
}
printName.call(obj, 24);

console.log("------------------------------------------------------");

var status = "good";

setTimeout(function () {
  const status = "bad";

  const data = {
    status: "Nothing",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
