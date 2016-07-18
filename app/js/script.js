$(document).ready(function() {	
	$('.check__form label').on ('click', function() {
		$(this).parents('a').toggleClass('checked');
	});
});