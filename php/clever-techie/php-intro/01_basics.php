<?php

// variables store values
$game_name = 'Mass Effect 3'; // string
//$release_year = 2013; // integer (whole)
$cost_now = 11.95; // float (fractional)
$awesome = true; // boolean (0 or 1) 

// define a constant
define('RELEASE_YEAR', 2013);
const BR = '<br>';
const HR = '<br>-------------------------------<br>';

echo "The game $game_name was released in .RELEASE_YEAR. and it now costs $$cost_now at amazon.com" . BR;

// Arithmetic operators

// Type conversion use case
$numString = '100.77';
var_dump($numString); // string data type
echo BR;
echo HR;
var_dump(+$numString); // convert to float data type

// Arrays
$game_genres = array('rpg', array('adventure', 'action', 'puzzle'), 'strategy', 'mmorpg', 'fps');

echo HR;

echo $game_genres[0].BR;

// Access multidimensional nested array
echo $game_genres[1][0].BR;
echo $game_genres[1][1].BR;
echo $game_genres[1][2].BR;

echo HR;

echo '<pre>';
print_r($game_genres);
echo '</pre>';

echo HR;

// Associative array
$years = array('Starcraft' => 1998, 'The Witcher' => 2009, 'The Mass Effect 3' => RELEASE_YEAR, 'Diablo' => 1996);

echo '<pre>';
print_r($years);
echo '</pre>';

// Functions

function pre_r($array) {
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}


function add($x, $y) {
    return $x + $y;
}

echo add(100, 100) . BR;

// Logical (comparison) operators

if (18 < 21) {
    echo "It's true";
}

echo BR;

if (18 > 21) {
    echo "It's true";
} else {
    echo "It's false";
}

// RELEASE_YEAR = '2013'
if (RELEASE_YEAR > 2010) { // true
    echo "The game was released after the year 2010".BR;

} elseif (RELEASE_YEAR == 2000) { // false
    echo "The game was released in the year 2000".BR;

} elseif (RELEASE_YEAR < 2010) { // false
    echo "The game was released before the year 2010".BR;

} else {
    echo "The game was released in 2010".BR;
}

// Switch statement






