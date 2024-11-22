console.log("-------------------JavaScript Hoisting-------------------------------")

//https://stackabuse.com/hoisting-in-javascript/
console.log(y)
var y = 20;
console.log(y)


//console.log(x) throws ReferenceError: Cannot access 'x' before initialization
let x = 20;
console.log(x)

console.log("-------------------Hoisting Functions-------------------------------")
let firstName = "ravi"
let lastName = "reddy"

const fullName = concat(firstName, lastName);
console.log(fullName);

function concat(f, l) {
    return f + l;
}

console.log("-------------------function expressions don't work-------------------------------")
//print()//throws ReferenceError: Cannot access 'print' before initialization
const print = function () {
    console.log("-----function expressions don't work---")
}

console.log("-------------------Hoisting classes-------------------------------")
var P = new Persion();
p.name = "ravi"
p.age = 24;

//console.log(p)  //ReferenceError: Cannot access 'Persion' before initialization

class Persion {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


