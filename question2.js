// Program to arrange letters in alphabetical order

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

let string = "webmaster";

console.log("Original String:", string);
console.log("Alphabetical Order:", alphabeticalOrder(string));