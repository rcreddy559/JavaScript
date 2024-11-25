const age = 10;

const user = {
  name: "Ravi",
  age: 30,
  printAgeArrow: () => {
    console.log(this.age);
  },
  printAge: function () {
    console.log(this.age);
  },
};

var person = { age: 20 };

user.printAgeArrow.call(person);
user.printAge.call(person);
//https://youtu.be/VkmUOktYDAU?si=8wwRARfDVTieWkQe&t=1300
