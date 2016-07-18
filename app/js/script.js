$(document).ready(function() {
	$('.check__form label').on ('click', function() {
		$(this).parents('a').toggleClass('checked');
		var i = 0;
		$('.course a').each(function() {
			if ($(this).hasClass('checked')) {
				i++;
			}
		});
		if (i == 6) {
			$('.course a').parents('.course').css('visibility','hidden');
			$('.course__title').css('visibility','hidden');
			$('.complete').slideDown(1300);
		}			
	});
});