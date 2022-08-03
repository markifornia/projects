<?php

class Movie {
    
}

$name = 'The Matrix'; // string
$release_year = 1999; // integer
$cost_now = 8.99; // float
$awesome = true; // boolean

$cast = array('Keanu Reeves' => 'Neo', 'Laurence Fishburne' => 'Morpheus', 'Carrie-Anne Moss' => 'Trinity', 'Hugo Weaving' => 'Agent Smith'); // Array
$matrix = new Movie(); // object
$nothing = NULL; // NULL
$open = fopen("C:\\movies\matrix.txt", 'r'); // resource

$data = array($name, $release_year, $cost_now, $awesome, $cast, $matrix, $nothing, $open);

for ($i = 0; $i < count($data); $i++) {
    echo gettype($data[$i]);
    echo "\n";

    if (is_array($data[$i])) {
        print_r($data[$i]);
    }
    echo "\n";

    if (is_numeric($data[$i])) {
        echo "Numeric value detected:" . $data[$i];
    }
    echo "\n";
}

/*
gettype() // gets the data of the variable
isset() // checks if the variable has been initialized
unset() // destroys a variable
is_float() // checks if variable type is float
is_int() // checks if variable type is integer
is_null() // checks if variable type is null
empty() // checks if variable is null or doesn't exist
is_numeric() // checks if variable value is number
var_dump() // provies information about the variable
intval() // convertes variable value to integer type 
strval() // converts variable value to string type
is_array() // checks if variable is array
settype() // set type of variable
*/