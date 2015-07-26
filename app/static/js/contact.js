//Contact Form
	
// make sure you listen for submit rather than click. For eg, people can send a form by hitting return on the last field
	
$(document).on('submit','.contactform',function submitContactForm(event){

	event.preventDefault();
	
	$.ajax({
		url: 'dhpark01@email.wm.edu',
		type: 'POST',
		data: $(this).serialize(),
		beforeSend: function(){
			// anything you want to do before hitting the server should go here - an activity spinner for example
		},
		error: function(xhr) {
		
			// if something goes wrong server-side, you'll get a response code here
		
			if (xhr.status == 404)
				console.log('not found');
			if (xhr.status == 500)
				console.log('server error');
			else
				console.log('unknown error');
	
		},
		success: function(response) {

			response = jQuery.parseJSON(response);

			// your response is now available as an object
			
			console.log(response.status);
			console.log(response.message);

			// see? so you can do stuff like this
			
			if (response.status == 'error')
				console.log('error returned');
			else
				console.log('all good');

			$(this).html('<form class="contactform"/>');
			
			$('.contactform').html("<h6>Thankyou for your enquiry!<br/>I will be in contact with you shortly.</h6>")
			.hide()
			.fadeIn(1500, function() {
			
			});

		}
	});

});
