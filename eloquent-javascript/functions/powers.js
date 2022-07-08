// Getting the power of a number

let power = function(base, exponent) {

  let result = 1;

  for (let counter = 0; counter < exponent; counter++) {

    result *= base;

  }

  return result;

}

let powerOfSomeNumber = power(2, 3);

console.log(powerOfSomeNumber);
