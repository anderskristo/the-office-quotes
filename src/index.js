var uniqueRandomArray = require('unique-random-array');

var michaelQuotes = require('./quotes/michael.json');
var dwightQuotes = require('./quotes/dwight.json');
var jimQuotes = require('./quotes/jim.json');

var allQuotes = [
    michaelQuotes,
    dwightQuotes,
    jimQuotes
];

var combineQuotes = function(quotes) {
    var newArray = [];
    quotes.forEach(function(quote) {
        newArray.push(quote);
    });
    return newArray;
};

module.exports = {
    all: combineQuotes(allQuotes),
    michael: michaelQuotes,
    dwight: dwightQuotes,
    jim: jimQuotes,
    random: uniqueRandomArray(allQuotes)
};
