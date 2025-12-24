//let bat =[('virat')]

let s = new Set(['virat', 'AB', 'Rohit', 'Msd', 'Rahul', 'AB'])

console.log('The Length of the set is : '+ s.size)


for (x of s){
    console.log('The element of the set is : '+ x)
}

s.forEach(x=> console.log(x))