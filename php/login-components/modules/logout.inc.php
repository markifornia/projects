<?php
/*
* Template: Logout Template
*/
 $_SESSION = array(); // Clear the variables.
  session_destroy(); // Destroy the session itself
  header("Location: http://localhost/login/?p=loggedout");
?>
