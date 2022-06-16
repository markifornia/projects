<?php
if(!isset($_SESSION['admin'])) {
	header("Location: http://localhost/beacon/");
}

/*
* This script inserts
* data into the users table
* using the crypt function
*/

$username = 'username';
$password = 'password';

$sql = sprintf("INSERT INTO users " . "(user_name, user_pass) VALUES ('%s', '%s');", mysql_real_escape_string($beacon), mysql_real_escape_string(crypt($password, $username)));

mysqli_query($dbc, $sql) or die("<p>Didnt work</p>" . mysqli_error($dbc));
?>
