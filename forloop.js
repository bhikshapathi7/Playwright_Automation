
let bat =['virat','rahul','rohit','Jaiswal','Abhishek','Hardhik']


for(let i=0; i<bat.length; i++)
{
    console.log('bats man name is  ' + bat[i])
}

console.log("###########################################")

for (j in bat)
{
    console.log('bats man name is  ' + bat[j])
}

console.log("###########################################")
for (x of bat)
{
    console.log("Bats  man is     "+ x)
}