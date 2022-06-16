<?php # footer.php

// Close the database connection.
if(isset($dbc)) {
	mysqli_close($dbc);
	unset($dbc);
}

?>
		<div id="footer">
			<div class="copy">Web Portal&nbsp;&copy; 
				<span id="copyright-year"><?php echo date("Y") ?></span>&nbsp;All Rights Reserved&nbsp;&nbsp;|&nbsp;
				<a href="/">Privacy Policy</a></div>
		</div>
	</div>
<!--<script src="http://code.jquery.com/jquery-latest.min.js"></script>-->
<script src="includes/js/jquery-1.11.1.min.js"></script>
<script src="includes/js/site.js"></script>
</body>
</html>