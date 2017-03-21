var navList = ["about", "gallery", "contactUs", "cusSrevise"];
$(document).on('click', ".nav li", function() {
	$.each(navList, function(index, val) {
		$('.col-md-8 section').hide();
	});
	var me = $(this).attr('class');
	$('section.' + me).show();

	// $("#getw").click(function() {
	// showWidth( "window", $( window ).width() );
	// });
	if ($(window).width() < 600) {
		$('.navbar-toggle').trigger('click');
	}
	if (me == "gallery") {
		$('.decoratedImage').hide()
	} else {
		$('.decoratedImage').show()
	}
});
$(document).ready(function() {
	if ($(window).width() < 600) {
		$('div.fotorama').attr('data-width', '300');
	} else
		$('div.fotorama').attr('data-width', '700');
});
$(document).on('click', ".navbar-brand", function() {
	$.each(navList, function(index, val) {
		$('.col-md-8 section').hide();
	});
	$('section.INeng').show();
});

$(document).ready(function() {

	$('#submit').click(function() {

		$.post("http://ineng.eu5.org/send.php", $("#mycontactform").serialize(), function(response) {
			// $('#success').html(response);
			//$('#success').hide('slow');
		});

	$('input').val('');
	$('#message').val('');
	alert('תודה על בקשתך, ניצור עמך קשר בהקדם');
	return false;
	});

});
