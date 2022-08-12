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

/** Important to note though are some inherit behaviors of the map() function */

// 1. map() creates a new array (assigned to a variable)
// 2. map() calls the function for each element in the array
// 3. map() empty elements won't work
// 4. map() does not change the original array

// So for the previous example, we can assign the entire thing an array, and return the result

let squareRootOfEachNumber = aSetOfNumbers.map(function(number) {
    return number * number; // Same result, just lesser lines
});

console.log(squareRootOfEachNumber);

// [3, 4, 2, 6, 2, 7, 2] turns into [9, 16, 4, 36, 4, 49, 4]
// Each number has been squared
