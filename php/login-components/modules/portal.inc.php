<?php
if(isset($_SESSION['user_name'])) {
	header("Location: http://localhost/beacon/?p=member");
} 
/*
* Template: Web Portal Page
*/
require_once('includes/login.php');
?>
		<div id="portal-container">
			<div id="outer-main-portal">
					<div id="portal-form-title">
						<h2><i class="fa fa-key"></i> Secure Member Login</h2>
					</div>
				<div id="inner-main-portal">
					<div id="portal-instructions">
						<p>Enter your username and password in the fields provided below.</p>
					</div>
					<div id="secureMessage">
					<?php 
					if(is_array($secureMessage) && !empty($secureMessage)) {
						foreach($secureMessage as $secureError) {
							echo $secureError;
						}
					}
					?>
					</div>
					<div id="portal-form-box">
						<form id="portalForm" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
							<div id="username-field">
								<label for="username">Username</label>
								<input type="text" id="username" name="username" value="<?php if(isset($_POST['username'])) { echo $_POST['username']; } ?>">
							</div>
							<div id="password-field">
								<label for="password">Password</label>
								<input type="password" id="password" name="userpassword" value="<?php if(isset($_POST['userpassword'])) { echo $_POST['userpassword']; } ?>">
							</div>
							<div id="login-btn">
								<label for="submit"></label>
								<input type="submit" value="Login &rarr;" id="submit" name="usersubmit">
								<div class="clear"></div>
							</div>
						</form>
					</div>
					<a href="#" title="Forgot Password" class="help">Forgot Password</a><br>
					<a href="#" title="Help" class="help">Help</a>
				</div>
			</div>
		</div>




