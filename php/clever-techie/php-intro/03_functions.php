<?php

const BR  = '<br>---------------<br>';

function multiply($one, $two) {
    return $one * $two;
}

echo multiply(5, 6);

echo BR;

// default (optional) arguments
function print_info(array $info, $color = 'lightblue') {

    $local = 'I live inside the function';

    global $global;
    $global = "I'm all over the place.";

    echo "<table bgcolor='$color' border ='3'" . "bordercolor = 'black' cellpadding='10' ". "cellspacing='0'>";

    foreach($info as $key => $value) {
        echo '<tr><td>'.ucwords($key).'</td><td>'.$value.'</td></tr>';
    }

    if($info['age'] > 21) {
        echo '<tr><td>Alcohol</td><td>Red Wine</td></tr>';
        echo '<tr><td>Random</td><td>'.multiply(rand(1,50), rand(1, 50)).'<td></tr>';
    }

    echo '</table>';

    echo $local;
}

$my_info = array('name' => 'Mark', 'age' => 42, 'gender' => 'M', 'job' => 'Brogrammer');

print_info($my_info);

echo BR;

$func_name = 'print_info';

$func_name($my_info, 'pink');

echo BR;

echo $local; // error

echo $global;

echo BR;

// recursive functions

function recursion($a) {
    if ($a <= 10) {
        echo "$a\n";
        recursion($a + 1);
    }
}

recursion(0);

echo BR;

// passing function parameters by reference

function add_some_extra(&$string) { // allow function to modify it's arguments

    // add string to existing variable
    $string .= 'and something extra';

}

$str = 'This is a string, ';
add_some_extra($str);
echo $str;




