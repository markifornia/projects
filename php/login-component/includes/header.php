<?php # header.php
session_start();

// Check for a $page_title value:
if(!isset($page_title)) {
	$page_title = 'Web Portal';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php echo $page_title; ?></title>
	<meta name="description" content="Web Portal">
	<meta name="keywords" content="Web Portal">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="./includes/css/style.css" rel="stylesheet" media="screen">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
	<link href="./includes/css/font-awesome.css" rel="stylesheet">
	<!--[if lt IE 9]>
	<script src="./includes/js/html5shiv.js"></script>
	<![endif]-->
</head>
<body>
	<div id="canvas">
		<div id="header">
			<div id="inner-header">
				<h1>
					<?php if(isset($_SESSION['user_name'])) { ?>
					<a href="/login/?p=member" title="Web Portal"><i class="fa fa-spinner"></i> Web Portal</a>
					 <?php } else { ?>
					<a href="/login/" title="Web Portal"><i class="fa fa-spinner"></i> Web Portal</a>
					<?php } ?>
				</h1>
					<?php if(isset($_SESSION['user_name'])) { ?>
				<div id="login-status">
					<ul>
						<li><i class="fa fa-user"></i> <a href="/login/?p=member" title="Logged In">Logged in as <?php echo $_SESSION['user_name']; ?></a></li>
						<li>
						<?php
						if( (isset($_SESSION['user_name'])) && (!strpos($_SERVER['PHP_SELF'], 'logout')) ){
							echo '<i class="fa fa-power-off"></i> <a href="/login/?p=logout" title="Logout">Logout</a>';
						}
						?>
						</li>
					</ul>
				</div>
				<?php }	?>
				<div class="clear"></div>
			</div>
		</div>
