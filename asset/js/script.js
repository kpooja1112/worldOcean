


$('.section-speaker ul li').click( function () {
	var ele = $(this).attr('class');
	$('.section-speaker .description').css('display', 'block');
	$('.description li.block[data-descrtn='+ele+']').css('display','block');
});

$('.closeIt').click(function(){
	$(this).parent('.description li.block').css('display','none');
	$('ul.description').css('display', 'none');
});

