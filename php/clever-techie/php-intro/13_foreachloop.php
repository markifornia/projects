<?php

$animals = array('Antelope' => 'Snorts', 'Bat' => 'Screeches', 'Bear' => 'Roars', 'Dolphin' => 'Clicks', 'Goose' => 'Honks', 'Vulture', 'Screams');

// foreach($animals as $name => $sound) {
//     echo $name . ' '  . $sound . '<br>';
// }

// modify array values by reference

$numbers = array(1, 2, 3, 4, 5);
print_r($numbers);

foreach($numbers as &$number) {
    $number = $number * 2;
}

echo '<br>';
unset($number); // break the reference with the last element
print_r($numbers);
