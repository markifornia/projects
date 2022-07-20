/*
* This example is confusing, but here we go -
*
* We are extending our base function by adding another
* argument to it, called 'pigs'
*
* We create two functions and call the padding function 
* from the function where pass in numbers
*/


function printZeroPaddedWithLabel(number, label) {

    // Turn number to string, why?
    // to concatenate numbers that 
    // are actually strings, yeah what?
    let numberString = String(number);

    while(numberString.length < 3) {
        
        numberString = "0" + numberString;
    }

    console.log(`${numberString} ${label}`);

}

function printFarmInventory(cows, chickens, pigs) { // notice there is a pigs argument now

    // pass each type of animal in seperate function calls
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");

}

printFarmInventory(7, 11, 3);   

// Output:
/*
007 Cows
011 Chickens
003 Pigs
*/