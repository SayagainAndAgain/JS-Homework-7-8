$(document).ready(function () {
	$('li').click(function () {
		var tabId = $(this).attr('tabId');
		$('li').removeClass('selected');
		$('.content')
			.slideUp("slow")
			.css('display', 'none');
		$(this).addClass('selected');
		$('#'+tabId)
			.css('background-color', 'yellow')
			.slideDown("slow")
			.css('display', 'inline-block');
	});
	$('li').mouseover(function () {
		$(this).addClass('hover');
	});
	$('li').mouseout(function () {
		$(this).removeClass('hover');
	});
	$('input').mouseover(function () {
		$('p.tooltip')
			.text($(this).attr('title'))
			.css({top:$(this).offset().top-5+'px', left:$(this).offset().left+$(this).outerWidth()+5+'px',})
			.slideDown("slow");
		$(this).attr('title','');
	});
	$('input').mouseout(function () {
		$(this).attr('title',$('p.tooltip').text());
		$('p.tooltip').hide();
	});
	
});