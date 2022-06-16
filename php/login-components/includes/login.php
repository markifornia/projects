<?php # login.php

/*
* This is a script that handles
* the secure form when ajax and/or
* javascript is disabled.
*/

require_once('config.inc.php');

$secureMessage = array();

if(isset($_POST['usersubmit'])) {

	// Assign POST data
	$username = mysqli_real_escape_string($dbc, trim($_POST['username']));
	$password = mysqli_real_escape_string($dbc, trim($_POST['userpassword']));

	$q = sprintf("SELECT * FROM users WHERE user_name = '%s' AND user_pass = '%s';", $username, crypt($password, $username));
	$r = mysqli_query($dbc, $q);

	$n = mysqli_num_rows($r);

	if($n > 0) {

		while($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {

			$secureUserName = $row['user_name'];
			$secureUserPassword = $row['user_pass'];

			if($username == $secureUserName && crypt($password, $username) == $secureUserPassword) {

					// Start the session
					session_start();
					$_SESSION = array();
					$_SESSION['user_name'] = $secureUserName;
					$_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
					$_SESSION['user_ip'] = $_SERVER['REMOTE_ADDR'];
					header("Location: http://localhost/login/?p=member");

			}
		}

	} else {

		if($username !== '' && $password !== '') {
			$secureMessage[] = '<p><i class="fa fa-exclamation-triangle"></i> Invalid username or password</p>';

		} else {
			$secureMessage[] = '<p><i class="fa fa-exclamation-triangle"></i> Please ensure all fields are completed</p>';
		}
	}
}
?>
