// Program to count the number of vowels in a string

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

let string = "Hello World";

console.log("String:", string);
console.log("Number of Vowels:", countVowels(string));