<?php # authorize.php
/*
* Run a session check to see
* if it exists.
*/

if(!isset($_SESSION['user_name']) || $_SESSION['user_agent'] != $_SERVER['HTTP_USER_AGENT'] || $_SESSION['user_ip'] != $_SERVER['REMOTE_ADDR']) {
	session_destroy();
	header("Location: http://localhost/beacon/");
	exit();
}
?>