const listObj = {
  firstName: "ravi",
  lastName: "reddy"
  //place: "berlin"
};

const myObj = ({ firstName, lastName, place = "Dortmund" }) => {
  console.log(firstName, lastName, place);
};

const myObj2 = x => {
  console.log(x.firstName, x.lastName, x.place);
};

myObj(listObj);
myObj2(listObj);
