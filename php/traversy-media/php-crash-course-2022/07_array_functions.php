<?php

$animals = ['Dog', 'Cat', 'Goat', 'Chicken'];

// get length
//echo count($animals);

// Search array
// returns boolean

//var_dump(in_array('Dog', $animals));

// Add to array
$animals[] = 'Cow';
//print_r($animals);

array_push($animals, 'Bird', 'Snake');
//print_r($animals);

array_unshift($animals, 'Lion');
//print_r($animals);

array_pop($animals);
//print_r($animals);

array_shift($animals);
//print_r($animals);

// remove specific element
unset($animals[2]);
//print_r($animals);

// split into chunks

$get_chunk = array_chunk($animals, 2);
// echo '<pre>';
// print_r($get_chunk);
// echo '</pre>';

// Merging / Conctenating two arrays

//$avengers = ['Thor', 'Captain America', 'Incredible Hulk', 'Iron Man'];

//$xmen = ['Wolverine', 'Storm', 'Cyclops', 'Beast'];

//$team = array_merge($avengers, $xmen);

// echo '<pre>';
// print_r($team);
// echo '</pre>';

// Spead operator:
//$team = [...$avengers, ...$xmen];
// echo '<pre>';
// print_r($team);
// echo '</pre>';

// combine keys and values using array_combine

$weapons = ['Hammer', 'Shield', 'Suit', 'Strength'];
$avengers = ['Thor', 'Captain America', 'Iron Man', 'Incredible Hulk'];

$team  = array_combine($weapons, $avengers);
// echo '<pre>';
// print_r($team);
// echo '</pre>';

$keys = array_keys($team);
// echo '<pre>';
// print_r($keys);
// echo '</pre>';

$flip = array_flip($team);
// echo '<pre>';
// print_r($flip);
// echo '</pre>';

$numbers = range(1, 20);
// echo '<pre>';
// print_r($numbers);
// echo '</pre>';

$newNumbers = array_map(function($number) {
    return "Number ${number}";
}, $numbers);

// echo '<pre>';
// print_r($newNumbers);
// echo '</pre>';

// array_filter
// yeah I know snake case, mix it up
$less_than_10 = array_filter($numbers, fn($number) => $number <= 15);

// echo '<pre>';
// print_r($less_than_10);
// echo '</pre>';


// array_reduce
// perform arithmetic operations
$numbers_array = range(1,2);

// to better see this operation
// I decreased the range to 2
// 0 + 1 = 1
// 1 + 2 = 3
// Result 3
$sum_of_numbers = array_reduce($numbers_array, fn($carry, $number) => $carry + $number);
var_dump($sum_of_numbers);


