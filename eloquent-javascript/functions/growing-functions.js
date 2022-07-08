/*
* Growing functions
* 007 Cows
* 011 Chickens
*/

// This exercise was particularly interesting
// because of the data type conversion
// In order to to count the length (how many digits),
// the supplied parameter must first
// be converted into a string
function printFarmInventory(cows, chickens) {

    let cowString = String(cows);

    while(cowString.length < 3) {
        cowString = "0" + cowString;
    }

    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    
    while(chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }

    console.log(`${chickenString} Chickens`);

}

printFarmInventory(5, 4); // 005

