//this includes the vehicle class as a module
const Vehicle = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...


class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
      super(make, model, year, color, mileage);
      this.maxPassenger = 5;
      this.passanger = 0;
      this.numberOfWheels = 4;
      this.fuel = 70;
      this.speed = 45;
    }
  
    slowDown() {
      if (this.speed > 30) {
        console.log('Slow down!');
      }
    }
  
    getGas() {
      if (this.fuel < 50) {
        console.log('Time to refuel');
      } else {
        console.log('Good to go!');
      }
    }

    checkUp() {
        if (this.mileage >= 5000) {
          console.log('Time for a checkup!');
        } else {
          console.log('No need for a checkup yet.');
        }
    }
}

//TO DO: Creating Instances and Testing Them

let car1 = new Car('Nissan', 'Altima SL', '2018', 'Black', 50000);
let car2 = new Car('Toyota', '4-runnner', '2023', 'Navy Green', 15000);


//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:

car1.slowDown(); 
car1.getGas(); 
car1.checkUp();

car2.slowDown(); 
car2.getGas(); 
car2.checkUp();