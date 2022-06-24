<?php

$string = 'Hello World';

// Get the length of a string
//echo strlen($string); // 11

// Find the position of the first occurence of a substring in a string
//echo strpos($string, 'o'); // 4

// Find the position of the last occurence of a substring
//echo strrpos($string, 'o'); // 7

// Reverse a string
//echo strrev($string); // dlroW olleH

// Convert all characters to lowercase
//echo strtolower($string); // hello world

// Convert all characters to uppercase
//echo strtoupper($string); // HELLO WORLD

if (str_starts_with($string, 'Hello')) {
    echo 'yuuup';
}

if (str_ends_with($string, 'abc')) {
    echo 'nooooo';
}

// security concerns

$dont_parse = '<h1>Hello</h1>';
echo htmlspecialchars($dont_parse);

echo htmlentities($dont_parse);

printf('%s likes to %s', 'Mark', 'Code');

// %s string
// %d number
// %f float
printf('1 + 1=%f', '2');