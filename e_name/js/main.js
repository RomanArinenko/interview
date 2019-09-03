$(document).ready(function() {
	$('.badges_sizing li').mouseover(function() {
		$('.badges_sizing li.hovered').removeClass('hovered');
		$(this).addClass('hovered');
		var n = $(this).prevAll('li').length + 1;
		$(this).parents('.price_block').find('.badges_pricing p.active').removeClass('active');
		$(this).parents('.price_block').find('.badges_pricing p:nth-child(' + n + ')').addClass('active');
	});
	$('.price_block').mouseover(function() {
		$('.price_block.hovered').removeClass('hovered');
		$(this).addClass('hovered');
	});

	$('.header div > span').click(function() {
		if($(this).hasClass('active')) {
			$('.header div > span,.header div').removeClass('active');
			$('.header .fade').fadeOut(1000);
		} else {
			$('.header div > span,.header div').addClass('active');
			$('.header .fade').fadeIn(1000);
		}
	});
	$('.sidebar > span').click(function() {
		if($(this).hasClass('active')) {
			$('.sidebar > span,.conferences .sidebar').removeClass('active');
			$('.conferences .fade').fadeOut(1000);
		} else {
			$('.sidebar > span,.conferences .sidebar').addClass('active');
			$('.conferences .fade').fadeIn(1000);
		}
	});
	$('.fade').click(function() {
		$('.header div > span,.header div').removeClass('active');
		$('.header .fade').fadeOut(1000);

		$('.sidebar > span,.conferences .sidebar').removeClass('active');
		$('.conferences .fade').fadeOut(1000);
	});

	$('.login span').click(function() {
		$('.sign_in_pop').fadeIn(600);
	});
	$('.sign_in_pop_close').click(function() {
		$('.sign_in_pop').fadeOut(600);
	});


	$('.to_create_new_acc').click(function() {
		$('.sign_in_inner,.restore_pass_inner').fadeOut(300);
		window.setTimeout(function(){
			$('.create_new_acc_inner').fadeIn(300);
			
		},310);
	});
	$('.to_restore_pass').click(function() {
		$('.sign_in_inner,.create_new_acc_inner').fadeOut(300);
		window.setTimeout(function(){
			$('.restore_pass_inner').fadeIn(300);
		},310);
	});
	$('.to_sign_in').click(function() {
		$('.restore_pass_inner,.create_new_acc_inner').fadeOut(300);
		window.setTimeout(function(){
			$('.sign_in_inner').fadeIn(300);
		},310);
	});

	$('.restore_pass_inner .button').click(function() {
		$('.restore_pass_inner').addClass('sent');
	});


	$('.dropdown').click(function() {
		if($(this).hasClass('active')) {
			$('.dropdown ul').slideUp(300);
			$('.dropdown.active').removeClass('active');
		} else {
			$('.dropdown ul').slideUp(300);
			$('.dropdown.active').removeClass('active');
			$(this).find('ul').slideDown(300);
			$(this).addClass('active');
		}
	});
});


 $(window).on('load resize', function() {
    var vh = $(window).outerHeight() * 0.01;
    $('html').css('--vh', vh + 'px')
});