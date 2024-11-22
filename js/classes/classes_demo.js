class Vehicle {
  constructor(type) {
    this.type = type;
  }
  getType() {
    return `This Vehicle is ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor(brand, year) {
    super("Car");
    this.brand = brand;
    this.year = year;
  }
  getCarInfo() {
    return `Car ${this.brand} manufactured in ${this.year}`;
  }
}

const myCar = new Car("Ford", 2000);
const myAudi = new Car("Audi", 2023);

console.log(myCar.getCarInfo());
console.log(myCar.getType());

console.log(myAudi.getCarInfo());
