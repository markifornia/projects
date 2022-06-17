// taking half of a value
// using a function


const takeHalf = function(numberToHalf) {

  if (!isNaN(numberToHalf)) {

    console.log(numberToHalf / 2);

  } else {

    console.log('Not a valid value to half');

  }

}

console.log('Pass in a number');
takeHalf(10);

console.log('-----------------');
console.log('Pass in a string');
takeHalf('ten');
