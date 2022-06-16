<?php #index.php
/*
* This is the main portal page
* This page includes the configuration file,
* the templates, and any content-specific modules.
*/

// Require the configuration file before any PHP code:
require_once('./includes/config.inc.php');

// Validate what page to show:
if(isset($_GET['p'])) {

	$p = $_GET['p'];

	} elseif (isset($_POST['p'])) {

	$p = $_POST['p'];

	} else {
	
	$p = NULL;
	
}

// Determine which page to display:
switch($p) {

	case 'insert':
		$page = 'insert.inc.php';
		$page_title = 'Secure Member Page';
		break;

	case 'member':
		$page = 'member.inc.php';
		$page_title = 'Secure Member Page';
		break;
		
	case 'logout':
		$page = 'logout.inc.php';
		$page_title = 'Log Out Page';
		break;
		
	case 'loggedout':
		$page = 'loggedout.inc.php';
		$page_title = 'Logged Out Page';
		break;
	
	// Default is to include the portal page.
	default:
		$page = 'portal.inc.php';
		$page_title = 'Web Portal';
		break;

} // End of main switch.

// Make sure the file exists:
if(!file_exists('./modules/' . $page)) {
	$page = 'portal.inc.php';
	$page_title = 'Web Portal';
}

// Include the header file:
include_once('./includes/header.php');

// Include the content-specific module
// $page is determined from the above switch.
include('./modules/' . $page);

// Include the footer file to complete the template:
include_once('./includes/footer.php');
?>