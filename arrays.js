let cricketers = ['virat', 18, 'rohit', 45, 'msd', 7, true, 123.45]
console.log(cricketers)
console.log('the length of the array is  '+ cricketers.length)
//Array methods

//push mean adding element at the end 

cricketers.push('Bumrah')
console.log('After push element to Array , result array is ' + cricketers)

//pop means removing last element from array

cricketers.pop()
console.log('After pop element to Array , result array is ' + cricketers)

//shift means remove first element from Array
cricketers.shift()
console.log('After shift element to Array , result array is ' + cricketers)

//unshift means it will add element at first index
cricketers.unshift('Hardhik')
console.log('After unshift element to Array , result array is       ' + cricketers)
 
//splice means remove set of elements from array in below case it will remove 0,1 elements
cricketers.splice(0,2)
console.log('After splice 0,2 element to Array , result array is      ' + cricketers)


// Slice method creates new array from existing array

let a = cricketers.slice(0,5)
console.log('new array created with slice method    ' + a)

let b = ['bumarah', 8 ,'arshad','varun', 'kuldeep',99,25]

let indians = a.concat(b,cricketers)

console.log("after concating three arrays the result array is " + indians)

console.log("3rd element from indian array   "+ indians[2])
console.log("5th element from indian array   "+ indians.at(4))


let bat =['virat','rahul','rohit','Jaiswal','Abhishek','Hardhik']

console.log("Before sorting   "+ bat)
//sorting sorting the order
let sortt = bat.sort()
console.log("After sorting   "+ sortt)
console.log(" sorting  Descending order   "+ sortt.reverse())

// reverse means reversing the order 
console.log(" reverse order   "+ bat.reverse())
