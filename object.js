//Object -->
// A group of properties and methods
// properties --> what an object has
// methods = what an object can do
// user . to access properties/methods


const car1 = {
  model: "Mustag",
  color: "red",
  year: 2043,

  drive: function() {
    console.log("you drive the car");

  },
  break: function() {
    console.log("you step on the breaks");
  }
}


// this = reference to a particular object
//         the object depends on the immediate data
const car2 = {
  model: "Ferrari",
  color: "Brown",
  year: 2023,

  drive: function() {
    //console.log(`you drive the car ${model}`); //this code will show error that's why we are using (this) reference.
    console.log(`you drive the car ${car2.model}`);
    //this --> is the reference of object 
    //we can use ^^ also but its preferd to use this reference 
    console.log(`you drive the car ${this.model}`);
  },
  break: function() {
    console.log("you step on the breaks");
  }
}

console.log(car1.year);
console.log(car2.year);
car1.drive();
car1.break();
car2.drive();
car2.break();

