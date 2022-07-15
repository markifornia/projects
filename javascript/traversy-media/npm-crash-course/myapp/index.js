const _= require('lodash');

const numbers = [23, 23, 54, 56, 56, 34];

_.each(numbers, function(number, index) {
    console.log(number);
});