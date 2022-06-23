<?php
/*
$y = 12;

function registerUser() {

    // visible in function
    global $y;
    echo $y;

    $x = 10;
    echo 'User registered';
}

echo $x; // not visible outside of function
registerUser();
*/

function registerEmail($email) {
    echo "${email} is registered";
}

//registerEmail('mark@gmail.com');

/*
function sum($n1, $n2) {
    return $n1 + $n2;
}

$number = sum(2, 3);
echo $number;
*/

// Default values:

function sum($n1 = 4, $n2 = 5) {
    return $n1 + $n2;
}

//echo sum();

// Anonymous functions:

$subtract = function($n1, $n2) {
    return $n1 - $n2;
};

//echo $subtract(10, 5);

// Arrow functions:

$multiply = fn($n1, $n2) => $n1 * $n2;  

echo $multiply(9, 9);


