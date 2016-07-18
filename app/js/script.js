$(document).ready(function() {
	$('.check__form label').on ('click', function() {
		$(this).parents('a').toggleClass('checked');
		var i = 0;
		$(this).parents('.course').fadeTo(600, 0).css('visibility','hidden');
		$('.course a').each(function() {
			if ($(this).hasClass('checked')) {
				i++;
			}
		});
		if (i == 6) {			
			$('.course__title').css('visibility','hidden');
			$('.complete').slideDown(1300);
		}			
	});
});