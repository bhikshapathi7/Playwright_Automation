let cricketers = new Map([
    ['virat', 18],
    ['rohit', 45],
    ['msd', 7],
    ['rahl', 1]
])

for (let [k, v] of cricketers) {
    console.log(`cricketer name is ${k} and his jersy number is ${v}`)
}

cricketers.forEach((v, k) => {
    console.log(`cricketer name is ${k} and his jersy number is ${v}`)
})