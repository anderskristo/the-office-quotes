var uniqueRandomArray = require('unique-random-array');
var allQuotes = require('./quotes/all.json');

module.exports = {
    all: allQuotes,
    random: uniqueRandomArray(allQuotes)
};
