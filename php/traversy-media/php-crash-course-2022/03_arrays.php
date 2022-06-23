<?php
// Simple Array

$numbers = [1, 44, 55, 22];
$animals = array('Dog', 'Cat', 'Chicken', 'Goat');

//var_dump($animals);

//echo $animals[1]; // Cat
//echo $animals[0]; // Dog

// Associative Array
$colors = [
    1 => 'red',
    2 => 'blue',
    3 => 'green',
    4 => 'yellow'
];

//echo $colors[4]; // yellow

// Keys as strings
$hex = [
    'red' => '#f00',
    'blue' => '#0f0',
    'green' => '#00f'
 ];

 //echo $hex['blue']; // #0f0

 $person = [
    'first_name' => 'Mark',
    'last_name' => 'Matanza',
    'email' => 'mark@gmail.com'
 ];

 //echo $person['first_name'];

 // Multi-dimensional arrays 
 // Arrays within arrays

 $people = [
    [
        'first_name' => 'Mark',
        'last_name' => 'Matanza',
        'email' => 'mark@gmail.com'
    ], 
    [
        'first_name' => 'Jane',
        'last_name' => 'Doe',
        'email' => 'Jane@gmail.com'
    ],
    [
        'first_name' => 'John',
        'last_name' => 'Matanza',
        'email' => 'John@gmail.com'
     ]      
 ];

//print_r($people[1]['email']);

// convert to JSON 
var_dump(json_encode($people));



