// loops in js 
// for loop 
// for in loop 
// for of loop 
// for each loop
// do while loop
console.log("Loops in js")
for(let i = 0; i<10;i++){
    console.log(i+1)
}
let obj = {
    "name":"Ahmed",
    "role":"Programmer",
    "salary":10000000,
    "Company":"Google"
}
// for in loop
for(let key in obj){
    console.log(key+obj[key])
}
// for of loop in js 
let stringArray = "Ahmed";
for(let index of stringArray){
    console.log(index)
}
// while loop in js
let i = 1;
while(i<6){
    console.log(i)
    i++;
}
// do while loop in js 
let x = 1;
do{
    console.log(x);
    x++;
}while(x<10)