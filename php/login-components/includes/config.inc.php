<?php #config.inc.php

/*
* File name: config.php
* Create by: Mark Matanza
* Contact: mark.matanza@gmail.com
* Last Modified: May 9, 2014
*
* Configuration file does the following things:
* - Has site settings in one location.
* - Stores URLs and URIs as constants.
* - Sets how errors will be handled.
* - Establishes a connection to the database.
*/

/**********************************
* SETTINGS
***********************************/

// Errors are emailed here.
$contact_email = 'mark.matanza@gmail.com';

// Determine whether we're working on a local server
// or on the real server.
if (stristr($_SERVER['HTTP_HOST'], 'local') || (substr($_SERVER['HTTP_HOST'], 0, 8) == '127.0.0.1')) {
        $local = TRUE;
} else {
        $local = FALSE;
}

// Determine location of files and the URL of the site:
// Allow for development on different servers.
if($local) { 

        // Always debug when running locally:
        $debug = TRUE;

        // Define the constants:
        define('BASE_URI', 'C:\\wamp\\www\\beacon\\');
        define('BASE_URL', 'http://localhost/');
        define('DB', 'localhost');

} else {

        define('BASE_URI', '/home/webportal/webportal/');
        define('BASE_URL', 'http://www.webportal.com/');
        define('DB', 'localhost');

}

/*
* Most important setting...
* The $debug variable is used to set management.
* To debug a specific page, add this to the index.php page

if($p = 'thismodule') $debug = TRUE;
require_once('./includes/config.inc.php');

* To debug the entire site, do

$debug = TRUE;
* before this next conditional.
*/

// Assume debugging is off.
if(!isset($debug)) {
        $debug = FALSE;
}


/**********************************
* ERROR MANAGEMENT
***********************************/

// Create the error handler.
function my_error_handler($e_number, $e_message, $e_file, $e_line, $e_vars) {

        global $debug, $contact_email;

        // Build the error message.
        $message = "An error occured in script '$e_file' on line $e_line: \n<br>$e_message\n<br>";

        // Add the data and time.
        $message .= "Date/Time: " . date('n-j-Y H:i:s') . "\n<br>";

        // Append $e_vars to the $message.
        $message .= "<pre>" . print_r($e_vars, 1) . "</pre>\n<br>";

        if($debug) { // show error

                echo '<p class="error">' . $message . '</p>';

        } else {

                // Log in the error:
                error_log($message, 1, $contact_email); // send email

                // Only print an error message if the error isn't a notice or strict.
                if( ($e_number != E_NOTICE) && ($e_number < 2048) ) {
                        echo '<p class="error">A system error occured. We apologize for the inconvenience.</p>';

                }

        } // End of $debug IF

} // End of my_error_handler() definition

// User my error handler:
set_error_handler('my_error_handler');

/**********************************
* DATABASE CONNECTION
***********************************/

// Connect to the database:
$dbc = @mysqli_connect(DB, 'root', 'admin', 'portal') OR trigger_error("Could not connect to the database!\n<br>MySQL Error: " . mysql_connect_error());

// Create a function for escaping the data.
function escape_date($data) {

	// Need the connection:
	global $dbc;
	
	// Address Magic Quotes:
	if(ini_get('magic_quotes_gpc')) {
		$data = stripslashes($data);
	}
	
	// Trim and escape:
	return mysqli_real_escape_string($dbc, trim($data));

} // END of escape_data() function.
?>