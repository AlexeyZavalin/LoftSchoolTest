$(document).ready(function() {
	$('.check__form label').on ('click', function() {
		$(this).parents('a').toggleClass('checked');
		var i = 0;
		$(this).parents('.course').delay(1000).hide(500);
		$('.course a').each(function() {
			if ($(this).hasClass('checked')) {
				i++;
			}
		});
		if (i == 6) {			
			$('.course__title').css('visibility','hidden');
			$('.complete').delay(900).fadeIn(600);
		}			
	});
	var height = $('.courses__list').height();
	$('.courses__list').css('min-height', height);
});