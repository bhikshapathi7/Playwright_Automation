    let x = 'mississippi'

let y = {};

for (let char of x) {
    // If char exists, increment; otherwise, set to 1
    y[char] = (y[char] || 0) + 1;
}

console.log(y); 
// Result: { m: 1, i: 4, s: 4, p: 2 }

//let x = 'mississippi';

let unique = x.split('')
              .filter((char, index, array) => array.indexOf(char) === index)
              .join('');

console.log(unique); // "misp"