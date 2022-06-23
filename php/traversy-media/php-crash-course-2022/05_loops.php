<?php 

// Execute code while a condition is met until it is not met

/*
** For loop syntax

for (initialize; condition; increment) {
    // code to be executed
}

*/

/*
for ($x = 0; $x < 10; $x++) {
    echo 'Number ' . $x;
}
*/

/*
** While Loop Syntax
    while (condition) {
        code to be executed
    }

*/

/*
$x = 1;
while ($x <= 15) {
    echo 'Number ' . $x . '<br>';
    $x++; // or $x = $x + 1;
}
*/

/*
** Do While Loop Syntax

do {
    // code to be executed no matter what
} while(condition);

do.. while loop will always execute the block of code once, 
even if the condition is false

*/

/*
$x = 6;

do {
    echo 'Number is ' . $x . '<br>';
    $x++;
} while($x <= 5);

*/


/*---------- Foreach Loop ---------- */
/*  Foreach loop syntax
 foreach ($array as $value) {
    code to be executed
}

*/

$posts = ['First Post', 'Second Post', 'Third Post'];

/*
// using a for loop
for ($x = 0; $x < count($posts); $x++) {

    echo $posts[$x];
}
*/

// using a foreach loop
/*
foreach($posts as $post) {
    echo $post;
}
*/

// with index
/*
foreach($posts as $index => $post) {
    echo $index . '-' . $post;
}
*/

$person = [
    'first_name' => 'Mark',
    'last_name' => 'Matanza',
    'age' => 42
];

foreach($person as $key => $value) {
    echo "${key} - ${value}";
}









