class Car {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;

    }

    drive() {
        console.log("I am driving  : " + this.name + "  and its belongs to " + this.brand + " family and its price is " + this.price)
    }

    fuel() {
        console.log(this.name + " is Petrol car")
    }
}

let c = new Car('nexon', 'Tata', 13.5);
let car = new Car('sonet', 'kia', 12.5)

c.drive(); c.fuel();
car.drive(); car.fuel() 