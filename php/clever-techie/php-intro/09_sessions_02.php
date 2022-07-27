<?php

session_start();

pre_r($_SESSION);

$_SESSION['username'] = 'ninja';

function pre_r($array) {
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}

pre_r($_SESSION);

session_destroy();

?>

