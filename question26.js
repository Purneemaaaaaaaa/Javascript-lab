// Program to find ten most frequent words

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tenMostFrequentWords(text) {

    var words = text.toLowerCase().match(/\b\w+\b/g);

    var frequency = {};

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }

    var sortedWords = Object.entries(frequency);

    sortedWords.sort(function(a, b) {
        return b[1] - a[1];
    });

    console.log("\nTen Most Frequent Words:");

    for (var i = 0; i < Math.min(10, sortedWords.length); i++) {
        console.log(sortedWords[i][0] + " : " + sortedWords[i][1]);
    }
}

rl.question("Enter a string: ", function(input) {
    tenMostFrequentWords(input);
    rl.close();
});