<?php

session_start();

//$_SESSION global variable array

$_SESSION['username'] = 'projectimmerse';
$_SESSION['role'] = 'admin';

function pre_r($array) {
    echo '<pre>';
    print_r($array);
    echo '</pre>';
}

pre_r($_SESSION);

?>

<p><a href="09_sessions_02.php">Go to Session 2</a></p>