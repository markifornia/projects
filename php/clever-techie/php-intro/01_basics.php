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

$best_game = 'StarCraft';

switch($best_game) {
    case 'StarCraft':
        echo "The best strategy game of all time, you rock Blizzard!".BR;
        break;
    case 'The Witcher':
        echo "The best RPG game of all time!".BR;
        break;
    case "The Mass Effect 3":
        echo "The best RPG game of all time!".BR;
        break;
    case "Diablo":
        echo "The best RPG game of all time!".BR;
        break;
}

// Loops
for ($i = 0; $i <= 10; $i++) {
    echo $i.BR;
}

echo HR;

// Ex: Loop through game genres (numeric keys)
for ($key = 0; $key < count($game_genres); $key++) {

    if (is_array($game_genres[$key])) {
        for ($key2 = 0; $key2 < count($game_genres[$key]); $key2++) {
            echo $game_genres[$key][$key2].BR;
        }
    } else {
        echo $game_genres[$key].BR;
    }
}

// Ex: Foreach loop (associative keys) 
foreach ($years as $game => $year) {
    echo "$game was released in $year".BR;
}

echo HR;

// Do.. While Loop
$i = 0;

do {

echo $i.BR; 
$i++;

} while ($i > 10);

echo HR;

// While Loop

$c = 0;
while ($c <= 10) {
    echo $c.BR;
    $c++;
}

echo HR;

class Car {

    public $make;
    public $type;
    public $color;
    public $maxSpeed;

    const BR = '<br>';
    
    public function stop() {
        echo 'Stopping...';
    }

    public function accelerate() {
        echo "$this->color $this->make $this->type is now accelerating".BR;
    }
    
    public function decelerate() {
        echo "$this->color $this->make $this->type is now decelrating".BR;
    }
    
    public function honk() {    
        echo "$this->color $this->make $this->type is honking".BR;
    }   

    public function turn_right() {
        echo "$this->color $this->make $this->type is turning right".BR;
    } 

    public function print_info() {
        echo "Make: $this->make".BR;
        echo "Type: $this->type".BR;
        echo "Color: $this->color".BR;
        echo "Max Speed: $this->maxSpeed".BR;
    } 

}

$yaris = new Car(); // object is created

$yaris->make = 'Toyota'.BR;
$yaris->type = 'Yaris'.BR;
$yaris->color = 'White'.BR;
$yaris->maxSpeed = '90mph'.BR;

$yaris->stop();
$yaris->accelerate();
$yaris->decelerate();
$yaris->honk();
$yaris->turn_right();

echo $yaris->print_info();
