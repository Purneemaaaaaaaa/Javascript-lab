// Program to reverse a number

function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''));
}

let number = 12345;

console.log("Original Number:", number);
console.log("Reversed Number:", reverseNumber(number));