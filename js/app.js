$(document).ready(function() {
	$('.module h3').click(function(event) {
		/* Act on the event */
		$(this).next().slideToggle();
	});
});