<?php
/**
* I was working on a function with several layers of of arrays
* being passed as arguments across other arrays, if this is 
* difficult to understand, I have some examples below:
*/

$AvengersArray = ['Thor', 'Captain America', 'Incredible Hulk', 'Iron Man'];

function firstArray($arg1) {

        print_r($arg1);
}


function secondArray($AvengersArray) {

    
    $AvengersArray[0] = 'Wolverine';
    $AvengersArray[1] = 'Cyclops'; 
    $AvengersArray[2] = 'Storm'; 
    $AvengersArray[3] = 'Beast';    

    $XMen = firstArray($AvengersArray);

    return $XMen;
}

/* Output: 
    [0] => Wolverine
    [1] => Cyclops
    [2] => Storm
    [3] => Beast

    And we see here that the original array within the global scope is maniuplated inside a function - if we call the function and then again
    pass the array to yet another function
*/
secondArray($AvengersArray);




?>
