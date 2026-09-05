// Program to check whether a string is blank or not

function isBlank(str) {
    return str.trim() === "";
}

var string1 = "";
var string2 = "Hello";

console.log("String 1 is blank:", isBlank(string1));
console.log("String 2 is blank:", isBlank(string2));