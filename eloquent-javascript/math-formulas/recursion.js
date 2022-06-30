/* 
* This is the power function reworked
* but in recursive form, as mentioned in 
* the book, this method will run slower
* then the loop version - but recursion
* is a useful tool I found to be often 
* needed in parsing file directories 
* with an unknown depth.
*/

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

let powerOfZero = power(1, 0);
console.log(`Power of 0 is ${powerOfZero}`); // power of 0, returns 1

console.log('--------------');

let powerOfOne = power(1, 1);
console.log(`Power of 1 is ${powerOfOne}`); // power of 1, returns 1 (will return the base)

//console.log(Math.pow(1, 1));



