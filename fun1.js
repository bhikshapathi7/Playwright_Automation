function arraysTest() {

    let bat = ['virat', 'rahul', 'rohit', 'Jaiswal', 'Abhishek', 'Hardhik']

    bat.map(x => x.toUpperCase())
        .forEach(x => console.log("Result is     :" + x))

}

function charAt3() {
    let bat1 = ['virat', 'rahul', 'rohit', 'Jaiswal', 'Abhishek', 'Hardhik'];

    let c = bat1.map(y => y.charAt(3))
        .reduce((s, y) => s.concat(y))
    console.log("@@@@@@@@ " + c)
}
arraysTest()
charAt3()