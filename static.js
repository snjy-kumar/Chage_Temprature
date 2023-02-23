// Static = belongs to the class not the objects
// properties: useful for caches, fixed-configuration
// methods: useful for utility functions


class Car {
  static numberOfCars = 0;
  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  static startRace() {
    console.log("3.......2.......1.........GO!!!!!!!!!!!!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Ferrari");
const car3 = new Car("UNi");
const car4 = new Car("Morlo");
const car5 = new Car("Musta");
const car6 = new Car("hondA");

Car.startRace();
console.log(Car.numberOfCars);



