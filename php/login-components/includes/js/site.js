/*
* Contact form handler 
* using the $.ajax object
* the handle requests sent 
* to the server.
*/

$("#submit").click(function() {

	var userName = $("#username");
	var userPassword = $("#password");
	var secureMessage = $("#secureMessage");
	var portalForm = $("#portalForm");
	var formAction = 'includes/login_ajax.php';
	var formData = $("#portalForm").serializeArray();

	if(userName.val() == "" || userPassword.val() == "") {

		secureMessage.hide().html('<p><i class="fa fa-exclamation-triangle"></i> Please enter both username and password</p>').fadeIn("slow");
		return false;
		
	} else {
	
		$.ajax({
			type: "POST",
			url: formAction,
			data: formData,
			beforeSend: function() {
				secureMessage.html('<p><img src="includes/images/loader.gif" alt="Loading..."> Verifying...</p>');
			},
			success: function(response) {
		
				if(response == 'success') {
	
					window.location.href = 'http://localhost/beacon/?p=member';
		
				} else {
				
					secureMessage.hide().html(response).fadeIn("slow");
				}
			},
			error: function() {
				secureMessage.html('<p><i class="fa fa-exclamation-triangle"></i> Please try again in a few moments.</p>');
			}
		});
	
	}
	
	portalForm.submit(function() {
		return false;
	});
	
	
}); // END click event