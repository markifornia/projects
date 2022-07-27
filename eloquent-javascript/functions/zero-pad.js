/*
* This is yet another extension of 
* growing functions, except in this exercise 
* we are going to isolate the padding functionality 
* into its own function -
* Again, a super complicated example for 
* an simple concept, but eloquent javascript
* can get super eloquent I suppose
*/

// isolate in separate function of concerns
function zeroPad(number, width) {
    let string = String(number);
    while(string.length < width) {
        string = "0" + string;
    }

    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);    
}

printFarmInventory(7, 16, 3); 

// Output 
/*
007 Cows
016 Chickens
003 Pigs
*/

//printFarmInventory(2, 50, 1000);

// Output 
/*
002 Cows
050 Chickens
1000 Pigs
*/