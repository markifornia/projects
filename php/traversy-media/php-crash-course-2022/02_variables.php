<?php 
/* ---------- PHP Data Types ----------*/

/*
- String    Series of characters surrounded by quotes
- Integer   Whole Numbers
- Float     Decimal Numbers
- Boolean   true or false
- Array     Special variable, which can hold more than value
- Object    A class
- NULL      Empty variable
- Resource  Special variable that holds a resource

*/

/* ---------- Variable Rules ----------*/

/*
- Variables must be prefixed with $
- Variables must start with a letter or the underscore
- Variables can't start with a number
- Variables can only contain alpha-numeric characters and underscores (A-z, 0-9, and _)
- Variables are case-sensitive ($name and $NAME are two different variables)
*/

$name = 'Mark'; // string
$age = 42; // Integer
$has_kids = false; // Bool using Snake case variable
$cash_on_hand = 20.75; // Float

//var_dump($cash_on_hand);

//echo $name . 'is ' . $age . ' years old'; // single quotes

//echo "$name is $age years old"; // double quotes

//echo "${name} is ${age} years old"; // Templating syntax

$x = '5' + '5';
//var_dump($x);
//echo 10 - 5; // Subtraction
//echo 5 * 6; // Multiplication
//echo 10 / 2; // Division
//echo 10 % 3; // Modulus (remainder)

// Constants
define('HOST', 'localhost');
define('DB_NAME', 'dev_db');

echo HOST;







