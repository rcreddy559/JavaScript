//split clean Code
const location = 'en-IN';
const locationSplit = location.split('-');
const lang = locationSplit[0]
const country = locationSplit[1]
console.log(lang, country)

const [l, c] = location.split('-')
console.log(l, c);

console.log("--------------------------");
let x = 1; // Initialize x outside of the object
let myX = {
    toString() {
        return x++; // Increment x and return its value
    }
};

// Check if myX is equal to 1, 2, and 3 in sequence
if (myX == 1 && myX == 2 && myX == 3) {
    console.log("x is 1, 2, 3");
}

console.log("------------------------------------------------------")

console.log(null)
console.log(undefined)
console.log(null == undefined)

console.log("------------------------------------------------------")

const printNumber = (number) => {
//    const n = number || "Number"; if number=0, assignes false to n,  0  is  false,  1 is  true

    // ?? is nulliesh  coalesciong operator,
    // s,if  number is null  or undefined, then it assignes "NaN"
    const n = number ?? "-NaN-";

    console.log(n)
}

printNumber(20);
printNumber(30);
printNumber(0);
printNumber(null);
printNumber(undefined);
console.log("------------------------------------------------------")

function justPrint(a, b = a) {
    return a + b + true;
}

console.log(justPrint(12))
console.log("------------------------------------------------------")
