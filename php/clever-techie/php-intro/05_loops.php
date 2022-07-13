<?php

const HR = '<br>----------<br>';
const BR = '<br>';

$dir = 'movies';
$files = scandir($dir);
$files = array_diff($files, array('..', '.'));
$files = array_values($files);

// pre_r($files);

function pre_r($array) {
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}

// for loop
for ($key = 0; $key < count($files); $key++) {
    echo $files[$key].BR;
}

echo HR; 

// For each loop
foreach ($files as $key => $value) {
    echo $files[$key].BR;
}

echo HR;

$key = 0;

// while loop
while ($key < count($files)) {
    echo $files[$key].BR;
    $key++;
}

echo HR;

// do while loop

$key = 0;

do {
    echo $files[$key];
    $key++;
} while ($key < count($files));
