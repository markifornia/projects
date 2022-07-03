<?php

const BR = '<br>';
const HR = '<br>-------------------<br>';

$name = 'Atari';
$Name = 'Sega';
$NAME = 'Nintendo';

echo "$name".BR;
echo "$Name".BR;
echo "$NAME".BR;

echo HR;

// PHP built in function
$int = sqrt(16);
echo "$int".BR;

echo HR;

// ternary expression
$age = 33;
$eval = $age > 21 ? "over 21" : "not over 21";
echo $eval;

echo HR;

// Variable variable
$$Name = '16-bit console'; // $Sega = '16-bit console';

echo HR;
// using array index key as a variable name
$planets = array(
    0 => 'Saturn',
    1 => 'Mercury',
    2 => 'Mars',
    3 => 'Neptune'
);

/* Below does not work! */
// echo '<pre>';
// print_r($planets);
// echo '</pre>';

// $$planets[2] = 'Roman god of war'; // $Mars = 'Roman god of war'
// echo $Mars;

// echo '<pre>';
// print_r($planets);
// echo '</pre>';

echo HR;

// Referencing

$copy = &$Name;
echo "$copy".BR; 

$Name = 'XBOX One';
echo $copy;

// Delete source variable
unset($Name);
echo $Name; // error

echo HR;

// Associative
$named = array(
    'pet' => 'Wallace',
    'car' => 'Acura',
    'income' => 500000,
    'gender' => 'M',
    'age' => 33
);

$numeric = array(1983, 33, 14, 12, 07, 42);

// echo '<pre>';
// print_r($named);
// print_r($numeric);
// echo '</pre>';

unset($named['car']);

// echo '<pre>';
// print_r($named);
// echo '</pre>';

echo HR;

unset($numeric['3']);

echo '<pre>';
print_r($numeric);
echo '</pre>';

echo HR; 

// combine ternary with isset
echo isset($named['income']) ? 'You have income' : 'You dont have any income';

echo HR;

echo is_array($numeric) ? "I'm an array" : "I'm not an array";

echo HR;

/* Other functions
gettype();
is_array();
is_float();
is_int();
is_object();
is_bool();
is_string();
*/

echo '<pre>';
echo gettype($named);
echo '</pre>';

echo HR;

echo '<pre>';
echo gettype($NAME);
echo '</pre>';

echo HR;

// scopes

function test() {
    // local scope
    $local = "I live inside the function";
    global $global;
    $global = "I'm everywhere";
}

test();
echo $local; // error
echo $global; // works





