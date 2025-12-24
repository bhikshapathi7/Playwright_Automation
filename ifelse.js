let bat = ['virat', 'rahul', 'rohit', 'Jaiswal', 'Abhishek', 'Hardhik']
let x = 0

for (x in bat) {

    if (bat[x] == 'virat') {
        console.log(bat[x] + '  is a Run machine')
    } else if (bat[x] == 'rohit') {
        console.log(bat[x] + " is a hitman")
    } else {
        console.log(bat[x] + '     he is young indian cricketer')
    }

}