$(document).ready(function() {
	$('#school_content').hide();
	$('#project_content').hide();
	$('#school').removeClass('active');
	$('#projects').removeClass('active');


	$('#home').click(function() {
		$('#school_content').hide();
		$('#project_content').hide();
		$('#home').addClass('active');
		$('#school').removeClass('active');
		$('#projects').removeClass('active');
	});

	$('#school').click(function() {
		$('#school_content').show();
		$('#project_content').hide();
		$('#home').removeClass('active');
		$('#school').addClass('active');
		$('#projects').removeClass('active');
	});

	$('#projects').click(function() {
		$('#school_content').hide();
		$('#project_content').show();
		$('#home').removeClass('active');
		$('#school').removeClass('active');
		$('#projects').addClass('active');
	});
});