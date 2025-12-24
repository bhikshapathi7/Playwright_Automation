
function Employee(name, age, salary) {
    this.age = age;
    this.name = name;
    this.salary = salary;

    let bonus = 100000

    let calculate = function () {
        let finalSal = salary + bonus
        console.log('Final salary is :' + finalSal)
    }

    this.getEmpDetials = function () {
        console.log('name is : ' + this.name + '  and age is : ' + this.age)
        calculate();
    }
}


let e = new Employee('Krithik', 16, 250000)
e.getEmpDetials()

