// Similar usage of a closure

let multiplier = function(factor) {
    return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

console.log('-----------------')

let thrice = multiplier(3);
console.log(thrice(10));