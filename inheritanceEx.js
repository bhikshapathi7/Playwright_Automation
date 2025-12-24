class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    eat() {
        console.log(this.name + ' eats gross and vegitables and its color is ' + this.color)
    }

}

class Sheep extends Animal {

    bark() {
        console.log(this.name + 'is barking')
    }
}

let sh1 = new Sheep('sheep1', 'white')
let sh2 = new Sheep('sheep2', 'Black')

sh1.eat();
sh1.bark();

sh2.bark()
sh2.eat()