//Inheritance = a child class can inherit all the 
// methods and properties from another class\


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}


const rabbit = new Rabbit("rabbit", 1, 50);
const fish = new Rabbit("fish", 12, 55);
const hawk = new Rabbit("hawk", 11, 530);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.runSpeed);


