let name1 = {
  firstName: "ravi",
  lastName: "Reddy",
};

let name2 = {
  firstName: "Gnanasree",
  lastName: "penumuru",
};

function printName(thirdParam) {
  console.log(this.firstName, this.lastName, thirdParam);
}

printName.call(name1, "Just call");
