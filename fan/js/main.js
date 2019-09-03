$(document).ready(function() {
	var owl = $('.big_slider');
    owl.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed: 2000,
        // autoplay: true,
        autoplaySpeed: 2000,
        mouseDrag: true,
        touchDrag: true,
        // animateOut: 'animated bounceOutUp',
        // animateIn: 'animated bounceInUp',
        center: true,
        items:1,
        // onTranslate: function(event) {
        //     if($('.main_slider .owl-dot:nth-child(1)').hasClass('active')) {
        //         $('.main_slider_bg').removeClass('for_slide_2 for_slide_3');
        //         $('.main_slider_bg').addClass('for_slide_1');
        //     } else if($('.main_slider .owl-dot:nth-child(2)').hasClass('active')) {
        //         $('.main_slider_bg').removeClass('for_slide_1 for_slide_3');
        //         $('.main_slider_bg').addClass('for_slide_2');
        //     } else if($('.main_slider .owl-dot:nth-child(3)').hasClass('active')) {
        //     	$('.main_slider_bg').removeClass('for_slide_1 for_slide_2');
        //         $('.main_slider_bg').addClass('for_slide_3');
        //     }
        // }
    });
    owl.on('resize.owl.carousel', function() {
        owl.data('owl.carousel').refresh();
    });



    $('.program_accordeon h4').click(function() {
    	if(!$(this).parent().hasClass('active')) {
    		$('.active .program_point_body_wr').slideUp(350);
    		$('.program_accordeon li.active').removeClass('active');
    		$(this).parent().addClass('active');
    		$(this).next('.program_point_body_wr').slideDown(350);
    	} else if ($(this).parent().hasClass('active')) {
            $('.active .program_point_body_wr').slideUp(350);
            $('.program_accordeon li.active').removeClass('active');
        }
    });

	$('.counter_body').mbComingsoon({
		expiryDate: new Date('2020-11-01'),
		interval: 1000,       // Counter uopdate interval
		speed: 500,
		localization: {
			days: "days",       //Localize labels of counter
			hours: "hours",
			minutes: "minutes",
			seconds: "seconds"
		}         //Function executed on expiry or if espired
	});

    $(window).on('scroll', function() {
        if($(window).scrollTop() > 50) {
            $('header').addClass('dark_bg');
        } else {
            $('header').removeClass('dark_bg');
        }
    });

    // button back to top /////////////////////////////////////////////////////////
        $(window).on('load scroll', function() {
            if($(window).scrollTop() > 200) {
                $('.arrow_up').fadeIn(350);
            } else {
                $('.arrow_up').fadeOut(350);
            }
        });
        $('.arrow_up').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        })
    // END button back to top /////////////////////////////////////////////////////


    // mobile menu ////////////////////////////////////////////////////////////////
    $('.burger').click(function() {
        $('.menu').addClass('active');
        $('body').addClass('locked');
        $('header').append('<div class="menu_fade"></div>');
        $('.menu_fade').fadeIn(600);
    });
    $('body').on('click', '.menu_fade, .mobile_menu_close', function() {
        $('.menu_fade').fadeOut(600);
        $('body').removeClass('locked');
        $('.menu').removeClass('active');
        setTimeout(function() {$('.menu_fade').remove()}, 600);
    });
    // END mobile menu ////////////////////////////////////////////////////////////



    // gallery carousel ////////////////////////////////////////////////////////////
    var owl = $('.gallery_carousel');
    owl.owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        smartSpeed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        mouseDrag: true,
        touchDrag: true,
        center: false,
        items:5,
        responsive: {
            0: {
                items: 1
            },
            482: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        },
        onTranslate: function(event) {
            window.jopa=1
        },
        onTranslated: function(event) {
            window.jopa=0;
        },

    });
    owl.on('resize.owl.carousel', function() {
        owl.data('owl.carousel').refresh();
    });
    // END gallery carousel ////////////////////////////////////////////////////////


    // gallery popup ///////////////////////////////////////////////////////////////
    var gallery_array = [];
    var current_gallery_item = '';
    $('.gallery_carousel_item figure img').each(function() {
        gallery_array.push($(this).prop('src'));
    });

    $('.gallery_carousel_item figure').click(function(e) {
        if (!window.jopa) {
            var current_gallery_item = $(this).find('img').prop('src');
            $('body').append(`<div class="gallery_pop">
                <div class="gallery_pop_navs">
                    <span class="gallery_pop_left"></span>
                    <span class="gallery_pop_right"></span>
                </div>
                <span class="gallery_pop_close"></span>
                <figure>
                    <img src="${current_gallery_item}">
                </figure>
                </div>`
            );
            $('.gallery_pop').fadeIn(600);
        }        
    });
    $('body').on('click', '.gallery_pop_left', function() {
        var gallery_pop_next_index = ($.inArray($('.gallery_pop figure img').prop('src'), gallery_array)) - 1;
        var gallery_pop_next_img = gallery_array[gallery_pop_next_index];
        $('.gallery_pop figure img').prop('src', gallery_array[gallery_pop_next_index]);
    });
    $('body').on('click', '.gallery_pop_right', function() {
        var gallery_pop_next_index = ($.inArray($('.gallery_pop figure img').prop('src'), gallery_array)) + 1;
        var gallery_pop_next_img = gallery_array[gallery_pop_next_index];
        $('.gallery_pop figure img').prop('src', gallery_array[gallery_pop_next_index]);

    });

    $('body').on('click', '.gallery_pop_close', function() {
        $('.gallery_pop').fadeOut(600);
        setTimeout(function() {$('.gallery_pop').remove()}, 600);
    });
    // END gallery popup ///////////////////////////////////////////////////////////

});