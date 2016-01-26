var uniqueRandomArray = require('unique-random-array');

var allQuotes = require('./quotes/all.json');
var michaelQuotes = require('./quotes/michael.json');
var dwightQuotes = require('./quotes/dwight.json');

module.exports = {
    all: allQuotes,
    michael: michaelQuotes,
    dwight: dwightQuotes,
    random: uniqueRandomArray(allQuotes)    
};
