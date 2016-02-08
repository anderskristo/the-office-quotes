var expect = require('chai').expect;
var quotes = require('./index');

describe('quotes', function() {
    describe('all', function() {
        it('should be an array of objects', function() {
            expect(quotes.all).to.satisfy(isArrayOfObjects);

            function isArrayOfObjects(array) {
                return array.every(function(item) {
                    return typeof item === 'object';
                });
            }
        });
    });

    describe('random', function() {
        it('should return a random object from quotes.all', function() {
            var randomQuote = quotes.random();
            expect(quotes.all).to.include(randomQuote);
        });
    });
});
