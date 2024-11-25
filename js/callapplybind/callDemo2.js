const animal = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimal(i) {
  this.print = function () {
    console.log(`species: ${this.species}, name: ${this.name}, this: ${i}`);
  };
  this.print();
}

for (let i = 0; i < animal.length; i++) {
  printAnimal.call(animal[i], i);
}
