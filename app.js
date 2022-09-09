const name = "hello";


function logger() {
    console.log("We are working");
    console.log("with functions and methods");
    console.log("in Javascript!");
    console.log("Welcome!");

} 

function adder() {
    const a= 12; 
    const b= 12;
    console.log(a*b)
}

function person() {
    const firstName= "Janeth";
    const nickName= "Jay"
    const LastName= "Cruz"

console.log(firstName + " " + nickName + " " + LastName)
}

function welcome() {
    
let str = "Working with Javascript!";
let part = str.substring(13);

    console.log(part)
}

logger();

adder();

person();

welcome();