// Program to remove specified number of characters from a string

function removeCharacters(str, index, count) {
    return str.substring(0, index) +
           str.substring(index + count);
}

var string = "JavaScript";
var index = 4;
var count = 6;

console.log("Original String:", string);
console.log("After Removing Characters:", removeCharacters(string, index, count));