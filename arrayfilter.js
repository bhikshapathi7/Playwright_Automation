
let bat = ['virat', 'rahul', 'rohit', 'Jaiswal', 'Abhishek', 'Hardhik']

let res = bat.map(x => x.length)
console.log(res)

bat.forEach(x => console.log(x))

bat.forEach(x => console.log(x.concat(' Indian')))
bat.sort().forEach(x => console.log(x))


let a = [5, 8, 1, 3, 4, 10, 2]

let sum = a.map(x => x * 3)
    .filter(x => x >= 15)
  //  .forEach(x => console.log(x))
    .reduce((s,x)=>s+x,0)

    console.log('final sum is  '+ sum)




    let bat1 = ['virat', 'rahul', 'rohit', 'Jaiswal', 'Abhishek', 'Hardhik'];

let c=bat1.map(y => y.charAt(3))
.reduce((s,y)=> s.concat(y))
   console.log("@@@@@@@@ "+ c)