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
function printFarmInventory(cows) {

    let cowString = String(cows);

    while(cowString.length < 3) {
        cowString = "0" + cowString;
    }

    console.log(`${cowString} Cows`);

}

printFarmInventory(5); // 005

