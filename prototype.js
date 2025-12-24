class Vehicle {

    constructor(name, isStarted) {
        this.name = name
        this.isStarted = isStarted;

    }
    start() {
        console.log(this.name + ' is starting :' + this.isStarted)

    }
}

class Bus extends Vehicle {

    fuel() {
        console.log(this.name + ' is fueling')
    }
}

Vehicle.prototype.stop = function () { console.log(this.name + ' is stopping due to low fuel') }

let b = new Bus('express', true)

b.start();
b.fuel();
b.stop();
//b.ride()

Vehicle.prototype.ride = function () { console.log(this.name + ' is riding along distance') }

let bike = new Bus('Delux', false)

bike.fuel();
bike.start();
bike.stop();
bike.ride();