/**
 *  If you have been using for and/or
 *  foreach loops to iterate through 
 *  a set or sequence of numbers and/or
 *  elements, that is totally fine. I 
 *  actually still use this method moreso
 *  that I do - javascripts built in function 
 *  map(). While this may be the case, this 
 *  method is used frequently in libraries throughout
 *  the javascript ecosystem. Let's check out 
 *  a few example use cases.
 */

// A simple array of numbers can be manipulated using
// the map() method, by chaining the method to its 
// corresponding data type, in this case an array.

// A set of random numbers
var aSetOfNumbers = [3, 4, 2, 6, 2, 7, 2];

// Using a for loop is totally fine

for (let i = 0; i < aSetOfNumbers.length; i++) {
    console.log(aSetOfNumbers[i]); // this will output the numbers
}

// We will skip the forEach() method and go straight to the map method();

aSetOfNumbers.map(function(i) {
    console.log(i); // will output the same sequence of numbers
});

// But we can also apply operations on each element, with the for loop -

for (let i = 0; i < aSetOfNumbers.length; i++) {
    console.log(aSetOfNumbers[i] * aSetOfNumbers[i]); // this will output the numbers times itself
}

// Next, the map() method, we use an anonymous function

aSetOfNumbers.map(function(number) {
    console.log(number * number); // Same result, just lesser lines
});
